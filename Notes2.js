var note1, note2, note3, note4, note5, copyText = "123";
function othername() {
    var input = document.getElementById("userInput").value;
    if (input =="68 74 74 70 73 3a 2f 2f 6e 6c 2e 77 69 6b 69 70 65 64 69 61 2e 6f 72 67 2f 77 69 6b 69 2f 42 65 76 65 72 5f 28 64 69 65 72 29"){
      block1.style.backgroundColor = "rgba(0,255,0,1)";
      note1 =1
      NotesComp()
    }
    else if (input =="104 145 040 160 151 156 147 165 303 257 156 163 040 153 157 155 145 156"){
      block2.style.backgroundColor = "rgba(0,255,0,1)";
      note2 =1
      NotesComp()
    }
    else if (input =="47 65 65 6e 20 6e 75 74 74 69 67 65 20 63 6f 64 65 20 3a 29"){
      block3.style.backgroundColor = "rgba(0,255,0,1)";
      note3 =1
      NotesComp()
    }
    else if (input =="6"){
      block4.style.backgroundColor = "rgba(0,255,0,1)";
      note4 =1
      NotesComp()
    }
    else if (input =="44444444444444"){
      block5.style.backgroundColor = "rgba(0,255,0,1)";
      note5 =1
      NotesComp();
    }
    else if(input =="42"){
      block1.style.backgroundColor = "rgba(0,255,0,1)";
      note1 =1
      block2.style.backgroundColor = "rgba(0,255,0,1)";
      note2 =1
      block3.style.backgroundColor = "rgba(0,255,0,1)";
      note3 =1
      block4.style.backgroundColor = "rgba(0,255,0,1)";
      note4 =1
      block5.style.backgroundColor = "rgba(0,255,0,1)";
      note5 =1
      NotesComp();

    }
}
function NotesComp(){
  if(note1 ==1 && note2 ==1 && note3 == 1 && note4 ==1 && note5 ==1){
    var copyText = document.getElementById("nnn");
  copyText.select();
  document.execCommand("copy");
  }
}
