const data = JSON.stringify({
    "name": "My Art",
    "description": "This is my custom art piece",
    "file_url": "https://bafkreiconw6zea2nkaxgn4p6p22uqn5zsvjlnq6cvqdrpie67tfn2clp4e.ipfs.nftstorage.link/"
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.nftport.xyz/v0/metadata");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "");
  
  xhr.send(data);