SELECT assignments.day, COUNT(assignments.*) 
FROM assignments 
GROUP BY assignments.day 
ORDER BY assignments.day;