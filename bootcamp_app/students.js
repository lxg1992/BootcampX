const { Pool } = require('pg');

const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host:'localhost',
  database:'bootcampx'
})

pool.query(`
  SELECT students.id, students.name, cohorts.name as cohort_name
  FROM students JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${args[0]}%' 
  LIMIT ${args[1]} || 5;`)
.then((res) => {
  res.rows.forEach(teacher => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
})
.catch((err) => {
  console.log('query error', err.stack);
})
