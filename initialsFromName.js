let createInitialsFromName = (name) => {
  let stringSize = name.split(" ");

  if (stringSize.length === 1) {
    oneString();
  } else if (stringSize.length === 2) {
    twoString();
  } else {
    threeString();
  }

  function twoString() {
    let name2Split = name.split(" ");
    let name2alpha1 = name2Split[0];
    let a = name2alpha1.substring(0, 1);
    let name2a1cap = a.toUpperCase();
    let name2alpha2 = name2Split[1];
    let b = name2alpha2.substring(0, 1);
    let name2a2cap = b.toUpperCase();
    let finalres2 = name2a1cap.concat(name2a2cap);
    console.log(finalres2);
  }

  function oneString() {
    let name1Subs = name.substring(0, 2);
    let name1Caps = name1Subs.toUpperCase();
    console.log(name1Caps);
  }

  function threeString() {
    let name3Split = name.split(" ");
    let name3alpha1 = name3Split[0];
    let c = name3alpha1.substring(0, 1);
    let name3a1cap = c.toUpperCase();
    let name3alpha2 = name.split(" ").pop();
    let d = name3alpha2.substring(0, 1);
    let name3a2cap = d.toUpperCase();
    let finalres3 = name3a1cap.concat(name3a2cap);
    console.log(finalres3);
  }

  return createInitialsFromName;
};


module.exports = createInitialsFromName;