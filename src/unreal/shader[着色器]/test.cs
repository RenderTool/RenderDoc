rollout BatchCMF "Batch Convert MAX Files v1.0" width:304 height:164
(
    local get_path
local get_files
local set_path
local name_of_type = #(
    "3D_StudioExporterPlugin (.3DS)",
    "Adobe_Illustrator (.AI)",
    "DWG_Export (.DWG)",
    "DWF_Exporter (.DWF)",
    "STL_Export (.STL)",
    "FBXEXP (.FBX)",
    "ObjExp (.OBJ)"
)
	
edittext edt1 "" pos:[104,16] width:192 height:16 readonly:true
button btn1 "Open from ..." pos:[8,13] width:88 height:24
edittext edt2 "" pos:[104,51] width:192 height:16 readonly:true
button btn2 "Save to  ..." pos:[8,48] width:88 height:24
dropdownList ddl1 "File type:" pos:[8,82] width:176 height:40 items:name_of_type
    button btn3 "Convert" pos:[192,80] width:104 height:40
checkbox chk1 "Show settings window for each file" pos:[8,124]

on btn1 pressed do
    (
        local OpenFileDialog = dotnetobject "System.Windows.Forms.OpenFileDialog"
OpenFileDialog.multiselect = true
OpenFileDialog.filter = "3ds Max (*.hkx)|*.hkx|All files (*.*)|*.*"
OpenFileDialog.ShowDialog()

if OpenFileDialog.FileNames.count > 0 then
(
    get_files = OpenFileDialog.FileNames
get_path = GetFileNamePath OpenFileDialog.FileNames[1]
edt1.text = (get_path + " (" + (get_files.count as string) + " .hkx)")
    )
    )
	
on btn2 pressed do
    (
        set_path = getSavePath caption:"Save to ..."
if set_path != undefined then
    (
        edt2.text = set_path
    )
    )
	
on btn3 pressed do
    (
        local file_type = case ddl1.selection of
(
1:".3ds"
2:".ai"
3:".dwg"
4:".dwf"
5:".stl"
6:".fbx"
7:".obj"
default:".3ds"
)
if get_files != undefined and set_path != undefined then
(
for i in get_files do
(
loadMaxFile i
if chk1.state then
(
exportFile (set_path + "\\" + (GetFileNameFile i) + file_type)
)
else
(
exportFile (set_path + "\\" + (GetFileNameFile i) + file_type) #noPrompt
)
)
)
else
(
messagebox "Not specified path!" title:"Path"
)
)
	
)
createDialog BatchCMF