import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePostList } from "../../hooks/usePostList";


function PaginationPoke(props) {
    const [page, setPage] = useState(1);
    const { posts, loading, error} = usePostList(1, 999999);

  const handleChange = (event, value) => {
    setPage(value);
    props.changePage(value, 20);
  };

  return (
    <>
        {error ? <p>Erro ao Carregar</p> : loading ? null : (
            <Stack sx={{alignItems: "center", margin: "0 0 15px 0"}} spacing={6}>
                <Pagination
                count={Math.ceil(posts.length / 20)}
                page={page}
                onChange={handleChange}
                color="primary"
                size="medium"
                />
            </Stack>
        )}
    </>
  )
}

export default PaginationPoke;


