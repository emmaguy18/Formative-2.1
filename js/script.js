//function: find max value of a number list
function findMax(aNums){
    var iMax = aNums [0, 15, 25, 35, 45, 55, 65, 75, 85, 95, 100];
    console.log(aNums);
    for(var iCount=0; iCount<aNums.length; iCount++) {
      //console.log(iCount<aNums.length);
        if(iMax > aNums[iCount]){
            iMax == aNums[iCount]
        }
        console.log(iMax);
    }
    return iMax;
}

//-----------------------------------------

//Input: Get 3 grades for each student
var iSize = parseInt(prompt('Class size?'));
var aGradesPhysics = [];
var aGradesChemistry = [];
var aGradesBiology= [];

//ParseInt does the same as Number but removes anything other than a number from the value if input
//Example parseInt(abc123) will give you 123
for (var iCount=0; iCount<iSize; iCount++) {
    var iGradePhysics = parseInt(prompt('Student '+(iCount+1)+': Grade for Physics out of 100'));
    aGradesPhysics.push(aGradesPhysics);
    //console.log(iGradePhysics);
    //console.log(aGradesPhysics);

    var iGradeChemistry = parseInt(prompt('Student '+(iCount+1)+': Grade for Biology out of 100'));
    aGradesChemistry.push(aGradesChemistry);
    //console.log(iGradeChemistry);
    //console.log(aGradesChemistry);

    var iGradeBiology = parseInt(prompt('Student '+(iCount+1)+': Grade for Chemistry out of 100'));
    aGradesBiology.push(aGradesBiology);
    //console.log(iGradeBiology);
    //console.log(aGradesBiology);
};


// processing: calculate average grade for each student and find top grade in class
var aAverageGrades = [];

for(var iCount=0; iCount < iSize.length; iCount++) {
    var fAverage = (aGradesPhysics[iCount+1] + aGradesChemistry[iCount+1] + aGradesBiology[iCount+1] / aGradesPhysics.length);
    //console.log(fAverage);
    aAverageGrades.push(fAverage);
}

var iTopGrade = findMax(aAverageGrades);

//output: list result for each student and top grade

for(var iCount=0; iCount < aAverageGrades.length; iCount++){
    if(aAverageGrades[iCount] < 50){

      document.write('Student'+(iCount+1)+': Fail<br>');

    } else if (aAverageGrades[iCount] > 50 && aAverageGrades[iCount]< 80){

        document.write('Student'+(iCount+1)+': Pass<br>');

    } else {

        document.write('Student'+(iCount+1)+': Pass with Distinction<br>');
    }
}

document.write('<h1>The top overall grade is ' +iTopGrade+ '</h1>');
