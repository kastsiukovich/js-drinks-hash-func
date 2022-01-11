// HW 7 DRINKS_HASH_FUNC
function HashStorageFunc() {
   var obj = {};
   this.addValue = function (key, result) {
      obj[key] = result;
   };
   this.getValue = function (key) {
      if (key in obj) {
         return obj[key];
      } else {
         return 'Напитка нет в меню';
      }
      console.log(obj[key]);
   };
   this.deletValue = function (key) {
      if (key in obj) {
         console.log(obj[key])
         delete obj[key];
         return "Напиток " + key + " удалён из меню!";
      } else {
         return "Напитка нет в меню!";
      }
   };
   this.getKeys = function () {
      var resultKey = [];
      for (key in obj) {
         resultKey.push(key);
      }
      return 'В меню присутствуют напитки: ' + resultKey + ',';
   };
};
var drinkStorage = new HashStorageFunc();
// console.log(drinkStorage);
function getResultaddValue() {
   var name = prompt("Введите название напитка");
   var isAlc = prompt("Он алкогольный?");
   var structure = prompt("Способ приготовления");
   var result = "Напиток - " + name + ",  алкогольный: " + isAlc + ", способ приготовления: " + structure + '.';
   drinkStorage.addValue(name, result);

};

function getResultgetValue() {
   var name = prompt("Введите искомое значение");
   alert(drinkStorage.getValue(name));

};
function getResultdeletValue() {
   var name = prompt("Введите удаляемое значение");
   alert(drinkStorage.deletValue(name));

};
function getResultgetKeys() {
   alert(drinkStorage.getKeys());
}
