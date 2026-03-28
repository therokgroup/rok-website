# Rok Group responsive QA review

Date: 2026-03-28

The latest homepage was reviewed on desktop and mobile. On desktop, the hero headline, navigation, call-to-action buttons, and branded van background image are all visible and aligned correctly. The van image sits behind the main headline as intended, remains bright enough to read clearly, and the top and bottom blend into the darker hero background without visible hard edges.

On mobile, the homepage remains readable and visually consistent with the design direction. The wordmark is clean, the hero copy stacks correctly, the van image still reads as a supporting background rather than a distracting photograph, and both primary call-to-action buttons remain accessible within the initial viewport area shown in the captured check. No obvious overlap, clipping, or contrast issue was observed in the reviewed state.

This review confirms the current version is suitable to package for GitHub upload. Further client-side content updates such as real case studies, testimonials, and a live contact form can be added later without changing the current source packaging workflow.

The Services page also renders correctly in the reviewed desktop state. Its shared header is intact, the editorial headline remains readable against the pale textured background, and the supporting card layout sits cleanly without obvious overlap or crowding.

The Projects page presents correctly on desktop as well. The dark hero section keeps strong headline contrast, the supporting portfolio-focus panel remains legible, and the featured project section below begins in a balanced way without any immediate spacing or clipping issue.

A mobile issue was identified on the internal page hero titles, where longer editorial headlines extended beyond the viewport width. This was corrected by constraining the hero headline measure and slightly reducing the base mobile display size in the shared internal page hero component.

After the fix, the Services page headline now wraps within the viewport without horizontal clipping, and the overall mobile hero remains readable and consistent with the editorial design direction. The refreshed mobile Projects screenshot also shows the long hero title wrapping within the available width without the previous overflow problem.

The refreshed mobile Process page now presents its long headline within the viewport, preserving the intended condensed editorial look without visible horizontal spill. The supporting introduction remains readable beneath the title, and the layout still feels balanced in a narrow mobile frame.

The refreshed mobile Areas page also wraps correctly after the shared hero adjustment. Its title stays inside the viewport, and the opening copy remains readable without overlap or obvious spacing failure in the captured state.

The refreshed mobile Contact page also holds together well. Its dark hero keeps strong text contrast, the opening message remains readable, and the direct-contact panel enters the viewport cleanly without the headline clipping issue that affected other internal page heroes earlier.

With the homepage and main internal pages reviewed on desktop and mobile, the current site is suitable to package for GitHub upload. The one notable responsiveness issue found during this pass was the mobile overflow on long internal-page hero titles, and that issue has now been corrected in the shared page hero component.
