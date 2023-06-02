create view transcripts as select date.datedisplay, students.type,
courses.title, courses.code, grades.result from grades left join students on
grades.student_id = students.id left join courses on grades.course_id =
courses.id; alter view transcripts owner to authenticated;
