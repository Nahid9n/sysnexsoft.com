"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(url)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading };
}