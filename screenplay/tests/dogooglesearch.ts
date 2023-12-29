import { BrowseTheWeb } from '@testla/screenplay-playwright/web';

import { test } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';


test('search robustqa on google', async ({page}) => {

    const actor = Actor.named('actor').can(BrowseTheWeb.using(page));
})
