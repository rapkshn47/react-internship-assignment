import React, { useState } from 'react';

interface DepartmentData {
  department: string;
  sub_departments: string[];
}

interface DepartmentProps {
  data: DepartmentData;
}

const Department: React.FC<DepartmentProps> = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [subDepartmentSelection, setSubDepartmentSelection] = useState<boolean[]>(
    new Array(data.sub_departments.length).fill(false)
  );
  const [isExpanded, setIsExpanded] = useState(true); // Initial state is expanded

  const toggleDepartmentSelection = () => {
    setIsSelected(!isSelected);
    setSubDepartmentSelection(subDepartmentSelection.fill(!isSelected));
  };

  const toggleSubDepartmentSelection = (index: number) => {
    const updatedSelection = [...subDepartmentSelection];
    updatedSelection[index] = !updatedSelection[index];
    setSubDepartmentSelection(updatedSelection);

    if (updatedSelection.every((selected) => selected)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="list-container">

    <ul>
      <li>
        <label>
          <i className={`fas ${isExpanded ? 'fa-minus-circle' : 'fa-plus-circle'}`} onClick={toggleExpansion}></i>
          <input type="checkbox" checked={isSelected} onChange={toggleDepartmentSelection} />
          {data.department}
        </label>
        <ul style={{ display: isExpanded ? 'block' : 'none' }}>
          {data.sub_departments.map((subDept, index) => (
            <li key={subDept}>
              <label>
                <input
                  type="checkbox"
                  checked={subDepartmentSelection[index]}
                  onChange={() => toggleSubDepartmentSelection(index)}
                />
                {subDept}
              </label>
            </li>
          ))}
        </ul>
      </li>
    </ul>
    </div>
  );
};

const Component2 = () => {
  const jsonData: DepartmentData[] = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  return (
    <div>
      {jsonData.map((data, index) => (
        <Department key={index} data={data} />
      ))}
    </div>
  );
};

export default Component2;
