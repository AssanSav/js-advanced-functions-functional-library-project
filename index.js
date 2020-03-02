// import { toughCookie } from "jsdom"

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      let arrayValues = !collection.isArray ? Object.values(collection) : collection.slice(0)
        for (let i = 0; i < arrayValues.length; i++) {
          callback(arrayValues[i], i, arrayValues)
      }
      return collection
    },

    map: function(collection, callback) {
      let arrayValues = !collection.isArray ? Object.values(collection) : collection.slice(0)
      let newArray = []
      for (let i = 0; i < arrayValues.length; i++){
        newArray.push(callback(arrayValues[i], i, arrayValues))
      }
      return newArray
    },

    reduce: function (collection, callback, initialValue) {
      let acc;
      if (!initialValue) {
        acc = collection[0]
        for (let i = 1; i < collection.length; i++){
          acc = callback(acc, collection[i], collection)
        }
      }
      else {
        acc = initialValue;
        for (let i = 0; i < collection.length; i++){
          acc = callback(acc, collection[i], collection)
        }
      }
      return acc
    },

    find: function (collection, predicate) {
      if (!(collection.isArray)) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]
          return undefined
    },

    filter: function (collection, predicate) {
      let filterResult = []
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) { 
          filterResult.push(collection[i])
        }
      return filterResult
    },

    size: function (collection) {
      let arrayValues = !collection.isArray ? Object.values(collection) : collection.slice(0)
      return arrayValues.length
    },

    first: function (array, n=0) {
      return (n) ? array.slice(0, n) : array[0]
    },

    last: function (array, n=0) {
      return (n) ? array.slice(array.length-n) : array[array.length-1]
    },

    compact: function (array) {
      return array.filter(record => record)
    },

    sortBy: function (array, callback) {
      let newArray = array.slice()
      newArray.sort((a, b) => {
        return callback(a) - callback(b)
      })
      return newArray
    },

    flatten: function (collection, shallow, flattenArray = []) { 
      if (!Array.isArray(collection)) return flattenArray.push(collection)
      if (shallow) {
         for (let i = 0; i < collection.length; i++){
           if (!Array.isArray(collection[i])) {
            flattenArray.push(collection[i])
           }
           else {
             for (let value of collection[i]) {
              flattenArray.push(value)
             }
          } 
        }
      }
      else {
        for (const value of collection) {
          this.flatten(value, false, flattenArray)
        }
      }
      return flattenArray
    },

    uniq: function (array) {
      let sortedArray = []
      for (let value of array) {
        if (!sortedArray.includes(value)) {
          sortedArray.push(value)
        }
      }
      return sortedArray
    }
      
  }
})()
 
fi.libraryMethod()
