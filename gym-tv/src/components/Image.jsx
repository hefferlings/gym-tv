/*import React, { Component } from "react";
import "./Image.css";
import { Dropbox } from "dropbox";

class Image extends Component {

  downloadFile() {
      var Dropbox = require('dropbox').Dropbox;
      var ACCESS_TOKEN = "";
      var dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

      dbx.filesDownload({ path: 'photo.png'})
        .then(function(response) {
            var results = document.getElementById('results');
            var img = document.createElement('img');
            img.src=window.URL.createObjectURL(response.fileBlob);
            console.log(response);
            console.log(response.fileBlob);
        })
        .catch(function(error) {
          console.error(error);
        });
        return false;
  }

  render() {
    return (
      <div className="Image">
        <img>img</img>
      </div>
    );
  }
}

export default Image;*/