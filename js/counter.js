    // fetch( "http://localhost/avcc/counter.php" , { 
    fetch( "counter.php" , { 
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json;charset=utf-8',
          //'Access-Control-Allow-Origin': 'http://localhost/avcc/counter.php'
          'Access-Control-Allow-Origin': 'counter.php'
        },
        mode: 'cors',
        }
    ).then(
            response => {
                if (!response.ok) {
                    throw new Error(`Network error: ${response.status}`);
                  };
                // response.json().then((data) => {console.log('VisitCounter=', data);})
                // console.log('counter response = ',response.statusText);
            }
        )
    .catch( error => {
        console.log('error= ',error);
    });