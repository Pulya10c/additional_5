module.exports = function check(str, bracketsConfig) {
  // your solution

  if ( typeof str != "string" ) {
        throw new Error( "'brackets' is not a string" );
      }
      if ( str.length % 2 ) {
        throw new Error( "'brackets' length is not even" );
      }
     
      var table = {};
      var bracket, i;
    
      for ( i = 0; i < str.length; i++ ) {

        if ( table.hasOwnProperty( bracket = str.charAt( i ) ) ) {
          throw new Error( "non-unique character encountered" );

        }

        table[ bracket ] = {
          id : i >>> 1,
          open : !( i % 2 )
        };

      }
     

      return function ( string ) {
        if ( typeof string != "string" ) {
          throw new Error( "'string' is not a string" );
        }
     
        var stack = [];
        var bracket, i;

        for ( i = 0; i < string.length; i++ ) {
          if ( table.hasOwnProperty( bracket = string.charAt( i ) ) ) {
            if ( table[ bracket ].open ) {

              stack.push( table[ bracket ].id );

            }

            else  if ( stack.length == 0 || stack.pop() != table[ bracket ].id ) {

              return false;
            }

          }

        }
     
        return stack.length == 0;

      }
    
}
