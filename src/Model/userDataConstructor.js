const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function userDataConstructor(data) {
  this.id = data.id ?? randomId(4);
  this.type = data.type;
  this.priority = +data.priority;
  this.order = +data.order;
  this.width = +data.width;
  this.height = +data.height;
}

function randomId(length) {
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return id;
}
