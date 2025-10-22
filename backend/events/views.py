from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.utils import timezone
from .models import Event, EventInquiry, EventCategory, EventSettings
from .serializers import (
    EventSerializer, EventInquirySerializer, EventCategorySerializer, EventSettingsSerializer
)


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.filter(published=True)
    serializer_class = EventSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['event_type', 'status', 'featured', 'city', 'country']
    search_fields = ['title', 'description', 'venue_name', 'city']
    ordering_fields = ['start_date', 'title', 'created_at']
    ordering = ['-start_date']

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming events"""
        upcoming_events = self.get_queryset().filter(
            start_date__gte=timezone.now(),
            status='upcoming'
        ).order_by('start_date')
        serializer = self.get_serializer(upcoming_events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def past(self, request):
        """Get past events"""
        past_events = self.get_queryset().filter(
            start_date__lt=timezone.now()
        ).order_by('-start_date')
        serializer = self.get_serializer(past_events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured events"""
        featured_events = self.get_queryset().filter(featured=True)
        serializer = self.get_serializer(featured_events, many=True)
        return Response(serializer.data)


class EventInquiryViewSet(viewsets.ModelViewSet):
    queryset = EventInquiry.objects.all()
    serializer_class = EventInquirySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['inquiry_type', 'status']
    search_fields = ['name', 'organization', 'email', 'event_title']
    ordering_fields = ['created_at', 'name']
    ordering = ['-created_at']

    def create(self, request, *args, **kwargs):
        """Create a new event inquiry"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            inquiry = serializer.save()
            
            # TODO: Send email notifications here
            # send_inquiry_notification(inquiry)
            # send_auto_response(inquiry)
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = EventCategory.objects.all()
    serializer_class = EventCategorySerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at']
    ordering = ['name']


class EventSettingsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = EventSettings.objects.all()
    serializer_class = EventSettingsSerializer