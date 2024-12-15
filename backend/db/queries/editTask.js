/**
 * 
 * @param {client} db - database client
 * @param {number} id - id of the todo item to be edited 
 * @param {string} newTask - new title of the todo item
 * @returns {Promise<object>} - returns a promise containing success message
 */
export const editTask = (db, id, newTask) => {
  return new Promise ((resolve, reject) => {
    const sql = 'UPDATE tasks SET title = $1, updated_at = NOW() WHERE id = $2';
    const values = [newTask, id];
    db.query(sql, values, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({'success': true, 'message': 'Task updated successfully' });
      }
    });
  });
};