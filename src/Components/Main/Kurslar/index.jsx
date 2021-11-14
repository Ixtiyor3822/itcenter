import React, {useState, useEffect} from 'react';
import Kurs from './Kurs';
import kurslar from './data'

const Kurslar = () =>{

    const [kurs, setKurs] = useState([])

    useEffect(()=>{ 
        setKurs(kurslar);
    },[])

    const presskurs = (name) =>{
        if(name===''){
            setKurs(kurslar);
        }
        else if(name==='savothonlik'){
            let data = kurslar.filter(kurs => kurs.type==='savothonlik')
            setKurs(data)
        }
        else if(name==='sport'){
            let data = kurslar.filter(kurs => kurs.type==='sport')
            setKurs(data)
        }
        else if(name==='dasturlash'){
            let data = kurslar.filter(kurs => kurs.type==='dasturlash')
            setKurs(data)
        }
        else if(name==='roboto'){
            let data = kurslar.filter(kurs => kurs.type==='roboto')
            setKurs(data)
        }
        // dizayn
        else if(name==='dizayn'){
            let data = kurslar.filter(kurs => kurs.type==='dizayn')
            setKurs(data)
        }
    }

    return (
        <div className="container">
            <nav className="navbar navbar-brand">
                <button onClick={()=> presskurs('')} className="knopka text-muted" >Barchasi</button>
                <button onClick={()=> presskurs('savothonlik')} className="knopka text-muted" >Boshlang`ich IT</button>
                <button onClick={()=> presskurs('dasturlash')} className="knopka text-muted" >Dasturlash</button>
                <button onClick={()=> presskurs('dizayn')} className="knopka text-muted" >Dizayn</button>
                <button onClick={()=> presskurs('roboto')} className="knopka text-muted" >Mobil robototexnika</button>
                <button onClick={()=> presskurs('sport')} className="knopka text-muted" >Kibersport</button>
            </nav>
            {/* <Kurs />
            <Kurs />
            <Kurs />
            <Kurs />
            <Kurs /> */}

            <div className="kurs_tuplam">

            {
                kurs.map(kurs =>{
                    return <Kurs key={kurs.kurs_name} kurs={kurs} />
                })
            }
            
            </div>
        </div>
    )
}

export default Kurslar;