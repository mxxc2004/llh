let a = document.querySelectorAll('.myHomeworkTable tbody tr');
a.forEach((e) => {
  let status = e.children[8].innerText;
  if (status === '-') return;
  let id = e.id.split('_')[1];
  let buttonContainer = e.children[9];
  let buttons = `<input type="button" class="small ui-button ui-widget ui-state-default ui-corner-all ${status ? `" onclick="homeworkStudentAttachFileByStudent(${id})"` : 'ui-state-disabled'}" value="Upload" style="color: red;">
  <input type="button" class="small ui-button ui-widget ui-state-default ui-corner-all ${status ? 'ui-state-disabled' : `" onclick="homeworkStudentUpdateFileByStudent(${id})"`}" value="Update" style="color: blue;">`
  buttonContainer.innerHTML += buttons;
})
