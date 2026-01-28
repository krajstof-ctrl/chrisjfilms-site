import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { StaffordshirePage } from './pages/StaffordshirePage.tsx';
import { WestMidlandsPage } from './pages/WestMidlandsPage.tsx';
import { BirminghamPage } from './pages/BirminghamPage.tsx';
import { WorcestershirePage } from './pages/WorcestershirePage.tsx';
import { UltimatePackagePage } from './pages/UltimatePackagePage.tsx';
import { BudgetPackagePage } from './pages/BudgetPackagePage.tsx';
import { StandardPackagePage } from './pages/StandardPackagePage.tsx';
import { LastMinutePackagePage } from './pages/LastMinutePackagePage.tsx';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.tsx';
import { ThankYouPage } from './pages/ThankYouPage.tsx';
import { MeetChrisPage } from './pages/MeetChrisPage.tsx';
import { SimonProfile } from './pages/videographer/SimonProfile.tsx';
import { MayharProfile } from './pages/videographer/MayharProfile.tsx';
import { CalebProfile } from './pages/videographer/CalebProfile.tsx';
import { PeteDavisProfile } from './pages/photographer/PeteDavisProfile.tsx';
import { BookingAdvancePage } from './pages/faq/BookingAdvancePage.tsx';
import { EditingTimelinePage } from './pages/faq/EditingTimelinePage.tsx';
import { TravelPage } from './pages/faq/TravelPage.tsx';
import { FilmingStylePage } from './pages/faq/FilmingStylePage.tsx';
import { CustomPackagesPage } from './pages/faq/CustomPackagesPage.tsx';
import { MealRequirementPage } from './pages/faq/MealRequirementPage.tsx';
import { DepositPage } from './pages/faq/DepositPage.tsx';
import { WhyHaveVideographerPage } from './pages/faq/WhyHaveVideographerPage.tsx';
import { ExperiencePage } from './pages/faq/ExperiencePage.tsx';
import { WatchLaterPage } from './pages/faq/WatchLaterPage.tsx';
import { DiscountsPage } from './pages/faq/DiscountsPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/staffordshire-wedding-videographer" element={<StaffordshirePage />} />
        <Route path="/west-midlands-wedding-videographer" element={<WestMidlandsPage />} />
        <Route path="/birmingham-wedding-videographer" element={<BirminghamPage />} />
        <Route path="/worcestershire-wedding-videographer" element={<WorcestershirePage />} />
        <Route path="/wedding-videographer-and-photographer" element={<UltimatePackagePage />} />
        <Route path="/budget-wedding-videographer" element={<BudgetPackagePage />} />
        <Route path="/cinematic-wedding-videographer" element={<StandardPackagePage />} />
        <Route path="/last-minute-wedding-videographer" element={<LastMinutePackagePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/meet-chris" element={<MeetChrisPage />} />
        <Route path="/videographer/simon" element={<SimonProfile />} />
        <Route path="/videographer/mayhar" element={<MayharProfile />} />
        <Route path="/videographer/caleb" element={<CalebProfile />} />
        <Route path="/photographer/pete-davis" element={<PeteDavisProfile />} />
        <Route path="/why-have-wedding-videographer" element={<WhyHaveVideographerPage />} />
        <Route path="/how-far-in-advance-book-wedding-videographer" element={<BookingAdvancePage />} />
        <Route path="/how-long-does-wedding-video-editing-take" element={<EditingTimelinePage />} />
        <Route path="/do-you-travel-for-weddings" element={<TravelPage />} />
        <Route path="/wedding-videography-filming-style" element={<FilmingStylePage />} />
        <Route path="/can-you-customise-wedding-videography-packages" element={<CustomPackagesPage />} />
        <Route path="/do-wedding-videographers-need-a-meal" element={<MealRequirementPage />} />
        <Route path="/wedding-videography-deposit" element={<DepositPage />} />
        <Route path="/wedding-videography-experience" element={<ExperiencePage />} />
        <Route path="/will-you-watch-wedding-video-later" element={<WatchLaterPage />} />
        <Route path="/wedding-videography-discounts-off-season-midweek" element={<DiscountsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
