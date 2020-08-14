import React, { useState, createRef } from "react";
import { Container, Arrow } from "./styles";
import Table from "../UI/Table";

function TableLiveCases({ data }) {
  const refTable = createRef();
  const [backTop, setBackTop] = useState(0);

  const handleScroll = (e) => {
    if (backTop) return;
    if (e.target.scrollTop > 300) setBackTop(e.target.scrollTop);
  };

  const handleBackTop = () => {
    refTable.current.children[0].scrollTo({ top: 0, behavior: "smooth" });

    setBackTop(0);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Casos em tempo real",
        columns: [
          {
            Header: "País",
            accessor: "country",
          },
          {
            Header: "Casos",
            accessor: "cases",
          },
        ],
      },
    ],
    []
  );

  return (
    <Container onScroll={handleScroll} ref={refTable}>
      {data && <Table columns={columns} data={data} />}

      <Arrow show={backTop} onClick={handleBackTop} />
    </Container>
  );
}

export default TableLiveCases;
