// TODO: write your code here

  export default function arrSort (arr) {

      arr.sort(function (a, b) {
        if (a.health < b.health) {
          return 1;
        }
        if (a.health > b.health) {
          return -1;
        }
        return 0;
      });

    return arr;

  }