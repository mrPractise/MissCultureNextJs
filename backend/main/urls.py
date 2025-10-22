from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AmbassadorViewSet, CulturalCommunityViewSet, CulturalHeritageViewSet,
    KenyaRegionViewSet, AchievementViewSet, BlogPostViewSet,
    PartnerViewSet, SocialMediaPostViewSet
)

router = DefaultRouter()
router.register(r'ambassador', AmbassadorViewSet)
router.register(r'communities', CulturalCommunityViewSet)
router.register(r'heritage', CulturalHeritageViewSet)
router.register(r'regions', KenyaRegionViewSet)
router.register(r'achievements', AchievementViewSet)
router.register(r'blog', BlogPostViewSet)
router.register(r'partners', PartnerViewSet)
router.register(r'social-media', SocialMediaPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
