let fonts = ['Georgia', 'Arial', 'Courier New', 'Verdana', 'Times New Roman'];
let selectedRow = 0; // Variable to keep track of the currently selected row

let row1 = ['A', 'young', 'Peter,', 'ignoring', 'his', 'grandfather\'s', 'warning,', 'goes', 'hunting', 'for', 'the', 'hungry', 'wolf', 'that', 'has', 'been', 'prowling', 'in', 'the', 'meadows.'];
let row2 = ['This', 'with', 'the', 'help', 'of', 'his', 'friends', 'Sasha', 'the', 'Songbird,', 'Sonia', 'the', 'Duck,', 'and', 'Ivan', 'the', 'Cat.'];
let row3 = ['Through', 'quick', 'thinking,', 'they', 'trick', 'the', 'wolf.'];
let row4 = ['The', 'wolf', 'is', 'taken', 'down', 'and', 'roped', 'up,', 'Peter', 'rejoices.'];
let row5 = ['But', 'he', 'was', 'mistaken.', 'The', 'wolf', 'escapes', 'and', 'swallows', 'his', 'friend,', 'Sonia', 'the', 'duck,', 'whole.'];
let row6 = ['His', 'grandfather', 'was', 'right', 'all', 'along.'];

// Create lists for synonyms of words in row1
let row1_item0 = ['A'];
let row1_item1 = ['youthful', 'junior', 'adolescent', 'juvenile'];
let row1_item2 = ['Peter'];
let row1_item3 = ['disregarding', 'neglecting', 'dismissing', 'overlooking'];
let row1_item4 = ['his'];
let row1_item5 = ['grandpa\'s', 'ancestor\'s', 'forefather\'s', 'elder\'s'];
let row1_item6 = ['warning'];
let row1_item7 = ['goes', 'moves', 'travels', 'proceeds'];
let row1_item8 = ['hunting', 'searching', 'pursuing', 'chasing'];
let row1_item9 = ['for'];
let row1_item10 = ['the'];
let row1_item11 = ['hungry'];
let row1_item12 = ['wolf', 'beast', 'creature', 'predator'];
let row1_item13 = ['that'];
let row1_item14 = ['has', 'possesses', 'holds', 'owns'];
let row1_item15 = ['been'];
let row1_item16 = ['prowling', 'lurking', 'stalking', 'roaming'];
let row1_item17 = ['in'];
let row1_item18 = ['the'];
let row1_item19 = ['meadows'];
let row1_item20 = ['.'];

// Create lists for synonyms of words in row2
let row2_item0 = ['This'];
let row2_item1 = ['with'];
let row2_item2 = ['the'];
let row2_item3 = ['aid', 'assistance', 'support', 'backing'];
let row2_item4 = ['of'];
let row2_item5 = ['his'];
let row2_item6 = ['companions', 'buddies', 'pals', 'mates'];
let row2_item7 = ['Sasha'];
let row2_item8 = ['the'];
let row2_item9 = ['Melodist,', 'Warbler,', 'Crooner,', 'Cantor,'];
let row2_item10 = ['Sonia'];
let row2_item11 = ['the'];
let row2_item12 = ['Quacker,','Dabbler,','Paddler,','Swimmer,'];
let row2_item13 = ['and'];
let row2_item14 = ['Ivan'];
let row2_item15 = ['the'];
let row2_item16 = ['Feline.'];

// Create lists for synonyms of words in row3
let row3_item0 = ['Via', 'Through', 'By', 'By means of'];
let row3_item1 = ['speedy', 'quick', 'rapid', 'swift'];
let row3_item2 = ['intellect', 'mind', 'perception', 'understanding'];
let row3_item3 = ['they'];
let row3_item4 = ['deceive', 'fool', 'mislead', 'trick'];
let row3_item5 = ['the'];
let row3_item6 = ['beast', 'creature', 'monster', 'animal'];

// Create lists for synonyms of words in row4
let row4_item0 = ['The'];
let row4_item1 = ['creature', 'animal', 'monster', 'beast'];
let row4_item2 = ['is', 'becomes', 'gets', 'turns'];
let row4_item3 = ['captured', 'caught', 'seized', 'snared'];
let row4_item4 = ['and'];
let row4_item5 = ['secured', 'fastened', 'fixed', 'attached'];
let row4_item6 = ['aloft', 'up', 'high', 'above'];
let row4_item7 = ['Peter'];
let row4_item8 = ['celebrates', 'revels', 'enjoys', 'delights'];

// Create lists for synonyms of words in row5
let row5_item0 = ['Yet', 'However', 'Nevertheless', 'Nonetheless'];
let row5_item1 = ['he'];
let row5_item2 = ['was', 'got', 'became', 'turned'];
let row5_item3 = ['incorrect', 'wrong', 'mistaken', 'erroneous'];
let row5_item4 = ['The'];
let row5_item5 = ['beast', 'monster', 'creature', 'animal'];
let row5_item6 = ['flees', 'escapes', 'runs away', 'evades'];
let row5_item7 = ['and'];
let row5_item8 = ['engulfs', 'consumes', 'devours', 'swallows'];
let row5_item9 = ['his'];
let row5_item10 = ['chum', 'pal', 'buddy', 'mate'];
let row5_item11 = ['Sonia'];
let row5_item12 = ['the'];
let row5_item13 = ['fowl', 'bird', 'avian', 'feathered friend'];
let row5_item14 = ['entire', 'whole', 'complete', 'total'];

// Create lists for synonyms of words in row6
let row6_item0 = ['His'];
let row6_item1 = ['grandpa', 'granddad', 'grandfather', 'grandparent'];
let row6_item2 = ['was', 'is', 'remains', 'stays'];
let row6_item3 = ['correct', 'right', 'accurate', 'true'];
let row6_item4 = ['all'];
let row6_item5 = ['throughout', 'through', 'during', 'in the course of'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Helvetica', 18);
}

function draw() {
  background(220);

  // Display row1
  fill(0);
  text(row1.join(' '), width / 2, height / 7);

  // Display row2
  text(row2.join(' '), width / 2, (height / 7) * 2);

  // Display row3
  text(row3.join(' '), width / 2, (height / 7) * 3);

  // Display row4
  text(row4.join(' '), width / 2, (height / 7) * 4);

  // Display row5
  text(row5.join(' '), width / 2, (height / 7) * 5);

  // Display row6
  text(row6.join(' '), width / 2, (height / 7) * 6);

  // Draw the red dot next to the selected row
  fill(255, 0, 0);
  stroke(0);
  ellipse(width / 4, (height / 7) * (selectedRow + 1), 10, 10);
}

function keyPressed() {
  if (keyCode === 32) { // Check if the pressed key is the spacebar
    let randomFont = random(fonts);
    textFont(randomFont, 15);
  } else if (keyCode === ENTER) { // Check if the pressed key is the Enter key
    replaceWords();
  } else if (keyCode === UP_ARROW) { // Check if the pressed key is the Up Arrow key
    selectedRow = (selectedRow - 1 + 6) % 6; // Move up and loop back to the bottom
  } else if (keyCode === DOWN_ARROW) { // Check if the pressed key is the Down Arrow key
    selectedRow = (selectedRow + 1) % 6; // Move down and loop back to the top
  }
}

function replaceWords() {
  // Replace each item in row1-row6 with a random item from the corresponding items list
  for (let i = 0; i < row1.length; i++) {
    if (i > 0 && i < row1.length - 1) {
      row1[i] = random(eval(`row1_item${i}`));
    }
  }

  for (let i = 0; i < row2.length; i++) {
    if (i > 0 && i < row2.length - 1) {
      row2[i] = random(eval(`row2_item${i}`));
    }
  }

  for (let i = 0; i < row3.length; i++) {
    if (i > 0 && i < row3.length - 1) {
      row3[i] = random(eval(`row3_item${i}`));
    }
  }

  for (let i = 0; i < row4.length; i++) {
    if (i > 0 && i < row4.length - 1) {
      row4[i] = random(eval(`row4_item${i}`));
    }
  }

  for (let i = 0; i < row5.length; i++) {
    if (i > 0 && i < row5.length - 1) {
      row5[i] = random(eval(`row5_item${i}`));
    }
  }

  for (let i = 0; i < row6.length; i++) {
    if (i > 0 && i < row6.length - 1) {
      row6[i] = random(eval(`row6_item${i}`));
    }
  }
}
