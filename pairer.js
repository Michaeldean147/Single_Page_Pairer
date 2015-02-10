students = ["Kevin Litchfield","Erika Lim","Zubair Desai","Nina Bachvarova","Julien Mayer","Denise Shephard","Oscar Linares","Max Gordon","Dana Mulder","Rory Grant","Tina Hweicheng Loh","Kristian Ziel","Ngan Pham","Brady Stilwell","Michael Dean","Alex Sell","Michael Smykowski","Luis Manzo","Heather Farley","Irina Tagintseva","Lauren Richie","Edozie Izegbu","David Dang","Bradley Johnson",
"Helen Lam","Cameron Irmas","Victoria Billingsley","Rosa Choi"]

$("#pairButton").on('click', function(){
  $('#studentList').empty()
  studentsToShow = _.shuffle(students)
  while(studentsToShow.length > 0){
    var student1 =  studentsToShow.pop()
    var student2 =  studentsToShow.pop()

    var student = "<li>" + student1 + " and " + student2 + "</li>"
    $('#studentList').append(student)
  }
})
