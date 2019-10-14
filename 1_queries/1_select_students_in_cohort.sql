SELECT id, name FROM students WHERE cohort_id = 5 ORDER BY name ASC;



SELECT name, id, cohort_id FROM students WHERE email NOT LIKE '%gmail.com' AND phone IS NULL;

SELECT name, id, cohort_id FROM students WHERE end_date IS NULL ORDER BY cohort_id;

SELECT name, email, phone FROM students WHERE github IS NULL AND end_date IS NOT NULL ORDER BY cohort_id;