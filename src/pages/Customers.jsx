import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter  } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { sort } from '@syncfusion/ej2-react-charts';


const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='page' title='Customers' /> 
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Dalete']}
      editSettings={{ allowDeleting: true, allowEditing: true}}
      width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Selection, Sort, Filter]} /> 
      </GridComponent>
    </div>
  )
}

export default Customers