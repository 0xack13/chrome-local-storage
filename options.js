// optionsText will share the state of the input value and local stoarge
const optionsText = {};

chrome.storage.sync.get('optionsText', (data) => {
  // get the value from the storage and print it
  console.log(data.optionsText.textinfo);
  // assign the retrieved optionText value to the optionsText
  Object.assign(optionsText, data.optionsText);
  // copy the value into the text field
  optionsForm.textinfo.value= optionsText.textinfo;
});

optionsForm.textinfo.addEventListener('change', (event) => {
  // print the value of the target field e.g. input text
  console.log(event.target.value);
  // copy the value into the optionsText
  optionsText.textinfo = event.target.value;
  // set the value un the storage from optionsText
  chrome.storage.sync.set({optionsText});
});
