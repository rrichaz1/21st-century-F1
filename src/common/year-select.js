import React, { useMemo, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const populateYears = () => {
    const year = (new Date()).getFullYear();
    const years= Array.from(new Array(year-2000+1), (_,index) => 2000 + index);
    years.unshift("Select Year");
    console.log("In populateYears "+years);
    return years;
}

const YearSelect = (props) => {

    const navigate = useNavigate();
    
    const years = useMemo(() => {return populateYears();}, []);
    const yearSelect = useRef(null);

    const handleSelectChange = (e) => {
        const selectedYear =e.target.value;    
        console.log("Props is " + props.parentpage);
        yearSelect.current.value = selectedYear;
        yearSelect.current.disabled = true;
        navigate(`/${props.parentpage}/${selectedYear}`);  

    };

    return (  
        <>
        <Form>
            <Form.Select ref={yearSelect} size="sm" onChange={handleSelectChange} aria-label=".form-select-sm example">
            {
                    years.map((year, index) => {
                        return <option key={`year${index}`} value={year}>{year}</option>
                    })
            }
            </Form.Select>

        </Form>
        </>

    );
}
 
export default YearSelect;