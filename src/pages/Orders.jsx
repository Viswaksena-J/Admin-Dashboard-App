import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        // pageSettings={{ pageSize: 10 }}
        allowSorting={true}
        // allowFiltering={true}
        // allowExcelExport={true}
        // allowPdfExport={true}
        // allowResizing={true}
        // allowTextWrap={true}
        // allowReordering={true}
        // contextMenuItems={contextMenuItems}
        // allowEditing={true}
        // editSettings={{
        //   allowEditing: true,
        //   allowAdding: true,
        //   allowDeleting: true,
        // }}
        // toolbar={[
        //   "Add",
        //   "Edit",
        //   "Delete",
        //   "Update",
        //   "Cancel",
        //   "Search",
        //   "ExcelExport",
        //   "PdfExport",
        // ]}
        // height="400"
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            PdfExport,
            ExcelExport,
            Edit,
            Page,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;