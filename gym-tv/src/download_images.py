import requests
from requests.auth import HTTPBasicAuth
import os

comment = '''
url = 'https://www.dropbox.com/rest_of_the_url'
db_username = 'aaron243smith@gmail.com'
db_password = 'hefferlings1'

downloaded_file = requests.get(url, auth=HTTPBasicAuth(db_username, db_password))

dest_file = open(os.getcwd()+'left_side.jpg', 'w+')

dest_file.write(downloaded_file.content)
'''
import dropbox

at = 'sl.BCNjUiWyLKnR4kUwEN-QrlIZf3Gvx0OiNZni5hBnT7-4Z-kSjIGW0B76Z6bgwBqZG60kFJD6joXHv5D7E7nMffnGWC5Slam6AGmMVMAXWruLehDhwcOthlpzM4F6N0OytcSFFhA'
dbx = dropbox.Dropbox(at)
lowerFilepaths = ['left_side.jpg','right_side.jpg']
saveLoc = os.path.abspath(os.path.dirname(__file__))
for lfp in lowerFilepaths:
    fp = os.path.join(saveLoc,lfp)
    print(fp)
    with open(fp, 'wb') as downloadedFile:
        metadata, res = dbx.files_download(path='/'+lfp)
        downloadedFile.write(res.content)
    
    
    
    