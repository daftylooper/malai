async function WriteJsonToIPFS(writeObject) {
  try {
    const blob = new Blob([JSON.stringify(writeObject)], { type: "application/json" });
    const data = new FormData();
    data.append("file", blob);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
        body: data,
      }
    );
    const resData = await res.json();
    console.log(resData);
    return resData.IpfsHash;

  } catch (error) {
    console.log(error);
  }
};

module.exports = WriteJsonToIPFS