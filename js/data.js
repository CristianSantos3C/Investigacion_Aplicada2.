const  indexedDB = window.indexedDB;
const form = document.getElementById('form');
const personas = document.getElementById('personas');

if(indexedDB && form){
    let db;
    const request = indexedDB.open('datosPersona',1);
    request.onsuccess = ()=>{
        db = request.result;
        console.log('OPEN', db);
        readDatos();

    }
    request.onupgradeneeded = () =>{
        db = request.result;
        console.log('Create', db);
        const almacenamiento = db.createObjectStore('datos',{
            autoIncrement: true
        });
    }
    request.onerror = (error) =>{
        console.log('error', error)
    }
    const addDatos = (data) =>{
        const transaction = db.transaction(['datos'],'readwrite');
        const almacenamiento = transaction.objectStore('datos');
        const request = almacenamiento.add(data);
        readDatos();
    }

    const readDatos = () =>{
        const transaction = db.transaction(['datos'],'readonly');
        const almacenamiento = transaction.objectStore('datos');
        const request = almacenamiento.openCursor();
        const fragmento = document.createDocumentFragment();
        

        request.onsuccess = (e) =>{
            
            //console.log(e.target);
            const cursor = e.target.result;
            if(cursor){
                //console.log(cursor.value);
                const nombres = document.createElement('p');
                nombres.textContent = cursor.value.nombres;
                fragmento.appendChild(nombres);
                const apellidos = document.createElement('p');
                apellidos.textContent = cursor.value.apellidos;
                fragmento.appendChild(apellidos);
                const duis = document.createElement('p');
                duis.textContent = cursor.value.duis;
                fragmento.appendChild(duis);
                cursor.continue();
            }else{
                //console.log("No hay mas personas");
                personas.textContent = '';
                personas.appendChild(fragmento);
                /*console.dir(fragmento);*/
                
            }
        }
    }


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            nombres:e.target.nombre.value, 
            apellidos: e.target.apellido.value,
            duis: e.target.numdu.value
        }
        addDatos(data);
    })
    

    
}