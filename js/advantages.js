$(document).ready(function(){
   $('.advantages-list').on('click', '.advantages-list__inner', function(){
       if($(this).hasClass('-active')) {
           $('.advantages-list__inner').removeClass('-active');
           $(this).removeClass('-active');
       } else {
           $('.advantages-list__inner').removeClass('-active');
           $(this).addClass('-active');
       }
   });
    
    
    const factorial = (n) => {
        if ( n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    };
    
    console.log(factorial(8));
    
    const sequenceSum = (begin, end, step) => {
        if (begin > end) {
            return 0;
        }
        return begin + sequenceSum((begin + step), end, step);
    };
    
    console.log(sequenceSum(2, 6, 2));
});

