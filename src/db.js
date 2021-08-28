import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('category.db');

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)',
          [],
          resolve,
          (_, error) => reject(error),
        );
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, text TEXT, category INTEGER)',
          [],
          resolve,
          (_, error) => reject(error),
        );
      });
    });
  }

  static getCategories() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM category',
          [],
          (_, result) => {
            let temp = [];
            for (let i = 0; i < result.rows.length; ++i) {
              temp.push(result.rows.item(i));
            }
            return resolve(temp);
          },
          (_, error) => reject(error),
        );
      });
    });
  }

  static createCategory(title) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO category (title) VALUES (?)',
          [title],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }

  static removeCategory(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM category WHERE id = ?',
          [id],
          resolve,
          (_, error) => reject(error),
        );
      });
    });
  }

  static getTodoList() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM todo',
          [],
          (_, result) => {
            let temp = [];
            for (let i = 0; i < result.rows.length; ++i) {
              temp.push(result.rows.item(i));
            }
            return resolve(temp);
          },
          (_, error) => reject(error),
        );
      });
    });
  }

  static createTodo({title, text, category}) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO todo (title, text, category) VALUES (?, ?, ?)',
          [title, text, category],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }

  static updateTodo({id, title, text, category}) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE todo SET title=?, text=?, category=? WHERE id=?',
          [title, text, category, id],
          resolve,
          (_, error) => reject(error),
        );
      });
    });
  }

  static removeTodo(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM todo WHERE id = ?',
          [id],
          resolve,
          (_, error) => reject(error),
        );
      });
    });
  }
}
