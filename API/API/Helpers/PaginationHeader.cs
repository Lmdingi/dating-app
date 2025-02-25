﻿namespace API.Helpers
{
    public class PaginationHeader(int currentPage, int itemsPerPage, int totalItems, int totalpages)
    {
        public int CurrentPages { get; set; } = currentPage;
        public int ItemsPerPage { get; set; } = itemsPerPage;
        public int TotalItems { get; set; } = totalItems;
        public int TotalPages { get; set; } = totalpages;
    }
}
