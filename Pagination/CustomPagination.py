from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class FivePerPagePaginator(PageNumberPagination):
    page_size = 5

    def get_paginated_response(self, data):
        return Response({'count': self.page.paginator.count,
                         'next': self.page.next_page_number() if self.page.has_next() else None,
                         'previous': self.page.previous_page_number() if self.page.has_previous() else None,
                         'results': data})
