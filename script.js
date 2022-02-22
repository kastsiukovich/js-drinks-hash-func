// HW 19 HashStorageClass
const button1 = document.getElementsByTagName('button')[0];
const button2 = document.getElementsByTagName('button')[1];
const button3 = document.getElementsByTagName('button')[2];
const button4 = document.getElementsByTagName('button')[3];

function marginBottom() {
   button1.style.marginBottom = '10px';
   button2.style.marginBottom = '10px';
   button3.style.marginBottom = '10px';
   button4.style.marginBottom = '10px';
}
marginBottom()
class HashStorageClass {
   constructor() {
      this._drinkStorageFull = {};
   }
   addValue(key, value) {
      this._drinkStorageFull[key] = value;
   }
   getValue(key) {
      if (key in this._drinkStorageFull) {
         return this._drinkStorageFull[key];
      } else {
         return 'Напитка нет в меню';
      }
   }
   deleteValue(key) {
      if (key in this._drinkStorageFull) {
         delete this._drinkStorageFull[key];
         return 'Напиток удален из меню!'
      } else {
         return 'Напитка нет в меню!'
      }
   }
   getKeys() {
      let keysAll = [];
      for (let key in this._drinkStorageFull) {
         keysAll.push(key)
      }
      return `В меню присутствуют напитки: 
      ${keysAll} 
      `;
   }
};
var drinkStorage = new HashStorageClass();

button1.addEventListener('click', function getResultAddValue() {
   let name = prompt('Введите название напитка');
   let isAlc = prompt('Он алкогольный?');
   let structure = prompt('Cпособ приготовления');
   let result = 'Напиток - ' + name + ',  алкогольный: ' + isAlc + ', способ приготовления: ' + structure + '.';
   return drinkStorage.addValue(name, result)
});
button2.addEventListener('click', function getResult() {
   let name = prompt('Введите название напитка');
   alert(drinkStorage.getValue(name));
});
button3.addEventListener('click', function () {
   let name = prompt('Введите напиток, который зотите удалить из меню!');
   alert(drinkStorage.deleteValue(name));
})

button4.addEventListener('click', function () {
   alert(drinkStorage.getKeys())
})

