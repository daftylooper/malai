// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Moderator {
    struct ModeratorData {
        address moderatorAddress;
        string username;
    }

    mapping(address => ModeratorData) public moderators;
    address[] public moderatorList;

    mapping(string => uint) public disapprovalCounts; 
    uint public totalModerators;
    uint public totalDisapproved;

    event ModeratorRegistered(address indexed moderatorAddress, string username);
    event PostModerated(string indexed cid, address indexed moderator, bool approved);
    event DisapprovalCountIncreased(string indexed cid, uint disapprovalCount);

    
    function registerModerator(address _moderatorAddress, string memory _username) public {
        require(moderators[_moderatorAddress].moderatorAddress == address(0), "Moderator already registered");
        moderators[_moderatorAddress] = ModeratorData(_moderatorAddress, _username);
        moderatorList.push(_moderatorAddress);
        totalModerators++;
        emit ModeratorRegistered(_moderatorAddress, _username);
    }

    function moderatePost(string memory _cid, address _moderatorAddress, bool _approved) public {
      require(moderators[_moderatorAddress].moderatorAddress != address(0), "Not a moderator");
      emit PostModerated(_cid, _moderatorAddress, _approved);
      if (!_approved) {
          disapprovalCounts[_cid]++;
          totalDisapproved++;
          emit DisapprovalCountIncreased(_cid, disapprovalCounts[_cid]);
      }
  }
  function isDisapprovedByMajority(string memory _cid) public view returns (bool) {
      uint majorityThreshold = (2 * totalModerators) / 3;
      return disapprovalCounts[_cid] >= majorityThreshold;
  }
}
