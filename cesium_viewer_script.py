import os

# def UpdateViewIX(num):
#     view_ix = num
#     new_lat = coords['y_coord'][view_ix]
#     new_lon = coords['x_coord'][view_ix]
#     new_alt = coords['z_coord'][view_ix]
#     new_head = coords['head'][view_ix]
#     return (new_lat, new_lon, new_alt, new_head)

def UpdateAppFile(new_lat, new_lon, new_alt, new_head):

    with open('C:/Users/swietek/Documents/View/swiss_viewpoint/Source/App.js','r') as f:
    	lines = f.readlines()

    newline = []    
    lat_old = lines[5].split('= ')[1].split(';')[0]
    lon_old = lines[6].split('= ')[1].split(';')[0]
    alt_old = lines[7].split('= ')[1].split(';')[0]
    head_old = lines[8].split('= ')[1].split(';')[0]

    for ix, line in enumerate(lines):
        if ix == 5:
            newline.append(line.replace(lat_old,str(new_lat)))
        elif ix == 6:
            newline.append(line.replace(lon_old,str(new_lon)))
        elif ix == 7:
            newline.append(line.replace(alt_old,str(new_alt)))
        elif ix == 8:
            newline.append(line.replace(head_old,str(new_head)))
        else:
            newline.append(line)

    with open('C:/Users/swietek/Documents/View/swiss_viewpoint/Source/App.js',"w") as f:
        for line in newline:
            f.writelines(line)

import selenium

# def launchViewer(webdriver):

# 	path = r'C:/Users/swietek/Documents/View/cesium/Source/geckodriver.exe'
# 	driver = selenium.webdriver.Firefox(executable_path= path)
# 	driver.get("http://localhost:8888/")
# 	return driver

def getView(new_lat, new_lon, new_alt, new_head):
	UpdateAppFile(new_lat, new_lon, new_alt, new_head)
	# driver.refresh()