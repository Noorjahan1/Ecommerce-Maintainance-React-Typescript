import React,{useState,useContext} from "react";
import styles from "./SideBar.module.css"
import Slider from '@mui/material/Slider';
import { DataContext } from '../Context/Context';
function valuetext(number:number) {
  return `${number}°C`;
}
  interface Tags{
    price:number[],
    theme:string[],
    Age:string[]
  }

export default function SideBar(){
 const Tags=useContext(DataContext);
  const [value, setValue] = React.useState([20, 37]);
  const [tags,setTags]=useState<Tags>({price:[],theme:[],Age:[]})
  const [theme,setTheme]=useState({space:false,ninja:false,transport:false,building:false,homes:false})
  const [age,setAge]=useState({"Up to a year":false,"1year-2years":false,"3 years -5 years":false,"6 years -5 years":false,"Older than 12 years":false})
  
  const handleChange = async ( Event:any, number:any ) => {
    await setValue(number);
    await setTags((prevValue)=>({...prevValue,price:[...value]}))
     

  };
 const changeTheme=async(event:any)=>{
     const {name,checked}=event.target;
     if(checked){
        setTags(
            (prevValue)=>({
                ...prevValue,
                theme:prevValue.theme.length===0?[name]:[...prevValue.theme,name]
            })
            
        )
     }
        
     
     await setTheme(preValue=>{
         
         return (
             {
                 ...preValue,
                 [name]:checked
             }
         )
     })
     

 }
 const changeAge=(event:any)=>{
    const {name,checked}=event.target
    if(checked){
        setTags((prevValue)=>({...prevValue,Age:prevValue.Age.length===0?[name]:[...prevValue.Age,name]}))
    }
    setAge((prevValue:any)=>{
            return {
                ...prevValue,
                [name]:checked

            }
         })
 
      
   
        
        
 }
 const reset= async ()=>{
     await setValue([0,0]);
     await setTheme({space:false,ninja:false,transport:false,building:false,homes:false})
     await setAge({"Up to a year":false,"1year-2years":false,"3 years -5 years":false,"6 years -5 years":false,"Older than 12 years":false})
     await applyFilter()
 }
 const applyFilter=()=>{
         
         Tags.filterApply(tags)
         
 }
    return(
        <>
        <div className={styles.sideMenu}>
            <div className={styles.listItems}>
               <ul>
                   <li>
                       <div className={styles.price}>
                            <p>Price</p>
                       </div>
                       <div className={styles.priceValue}>
                           <div className={styles.minRange}>
                               <p>From <span>{value[0]}</span>$</p>
                           </div>
                           <div className={styles.maxRange}>
                               <p>Upto <span>{value[1]}</span>$</p>
                           </div>
                       </div>
                       <div className={styles.priceRange}>
                          <Slider
  getAriaLabel={() => 'Temperature range'}
   value={value}
  onChange={handleChange}
  valueLabelDisplay="auto"
 getAriaValueText={valuetext}
 min={0}
 max={1000}
  sx={
      {
          color:"#df3238",
          '& .MuiSlider-rail':{
              backgroundColor:"#e6e6e6"
          }
      }
  }
/>
                       </div>
                   </li>
                   <li>
                       <div className={styles.Theme}>
                           <p>Theme</p>
                           <i className="fa-solid fa-angle-up"></i>
                       </div>
                       <div className={styles.themeBody}>
                             <label htmlFor="space" className={styles.cont}>
                            <input type="checkbox" id="space" name="space" checked={theme.space} onChange={(event)=>changeTheme(event)} />
                            <span>Space (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="ninja" className={styles.cont}>
                            <input type="checkbox" id="ninja" name="ninja" checked={theme.ninja}  onChange={(event)=>changeTheme(event)}/>
                            <span>Ninja (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="transport" className={styles.cont}>
                            <input type="checkbox" id="transport" name="transport" checked={theme.transport} onChange={(event)=>changeTheme(event)}/>
                            <span>Transport (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="building" className={styles.cont}>
                            <input type="checkbox" id="building" name="building" checked={theme.building} onChange={(event)=>changeTheme(event)} />
                            <span>Building (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="homes" className={styles.cont}>
                            <input type="checkbox" id="homes" name="homes" checked={theme.homes} onChange={(event)=>changeTheme(event)}/>
                            <span>Homes (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                       </div>
                   </li>
                   <li >
                       <div className={styles.age}>
                           <p>Age</p>
                           <i className="fa-solid fa-angle-up"></i>
                       </div>
                       <div className={styles.checkAge}>
                            <label htmlFor="year" className={styles.cont}>
                               
                            <input type="checkbox" id="year" checked={age["Up to a year"]} name="Up to a year" onChange={changeAge}/>
                            <span>Up to a year</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year1" className={styles.cont}>
                            <input type="checkbox" id="year1" checked={ age["1year-2years"]} name="1year-2years" onChange={changeAge} />
                            <span>1 year-2 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year2" className={styles.cont}>
                            <input type="checkbox" id="year2" checked={age["3 years -5 years"]}  name="3 years -5 years" onChange={changeAge} />
                            <span>3 years-5 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year3" className={styles.cont}>
                            <input type="checkbox" id="year3"  checked={ age["6 years -5 years"] }    name="6 years -5 years" onChange={changeAge}/>
                            <span>6 years-5 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year4" className={styles.cont}>
                            <input type="checkbox" id="year4"  checked={age["Older than 12 years"]}  name="Older than 12 years" onChange={changeAge}/>
                            <span>Older than 12 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                       </div>
                   </li>
                   <li >
                       <select className={styles.dropDown}>
                           <option value="Stockavai">Brand</option>
                       </select>
                   </li>
                   <li >
                       <select className={styles.dropDown}>
                           <option value="Stockavai">Characters</option>
                       </select>
                   </li>
                   <li className={styles.noBorder}>
                       <select className={styles.dropDown}>
                           <option value="Stockavai">Stock Availability</option>
                       </select>
                   </li>
                   <li >
                       <div className={styles.applyFilter}>
                           <button onClick={applyFilter}>Apply Filter</button>
                           <i className="fa-solid fa-trash-can" onClick={reset}></i>
                       </div>
                   
                   </li>
               </ul>
            </div>
        </div>
        </>
    )
}