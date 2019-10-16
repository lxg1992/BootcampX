const { Pool } = require('pg');

const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host:'localhost',
  database:'bootcampx'
})

pool.query(`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort,  count(assistance_requests) as total_assistances
  FROM teachers 
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id 
  WHERE cohorts.name = '${args[0] || 'JUL02'}'
  GROUP BY teachers.name, cohorts.name
  ORDER BY teachers.name;`
)
.then((res) => {
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  })
})
.catch((err) => {
  console.log('query error', err.stack);
})
