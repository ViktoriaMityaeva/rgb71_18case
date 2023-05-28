import xml.etree.ElementTree as ET
import requests

file = r'/home/devuser/backend-case19-lct/V001_20210914.XML'

mytree = ET.parse(file)

myroot = mytree.getroot()

for x in myroot.findall('PART'):
    for i in x.findall('SERVICES'):
        print(i.text)
        SERVICE_CODE = i.find('SERVICE_CODE').text.strip()
        SERVICE_NAME = i.find('SERVICE_NAME').text.strip()

        if SERVICE_CODE:
            requests.post(r'http://ai-med-help.ru:8000/api/core/naznachenie/', json={
                "diagnos_code":SERVICE_CODE,
                "diagnos":[SERVICE_NAME,]
            })
