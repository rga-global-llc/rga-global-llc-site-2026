# RGA Global website

This is a static website made with HTML, CSS and a small JavaScript file. It has no CRM, dashboard, dialer or backend.

## Preview on your Mac

1. Open this folder in Visual Studio Code.
2. In VS Code, choose **File → Open Folder…** and select this project folder.
3. Install the **Live Server** extension by Ritwick Dey from the Extensions icon in the left sidebar.
4. Open `index.html`, then click **Go Live** in the bottom right. Chrome should open the local preview. You can also right-click `index.html` and choose **Open with Live Server**.

If you prefer not to install an extension, double-click `index.html` in Finder to open it in your browser. Some local preview features may be more convenient through Live Server.

## Publish free with GitHub Pages

1. Sign in to GitHub and create a new **public** repository, for example `rga-global-website`.
2. In VS Code, open **Terminal → New Terminal** and run these one at a time from this project folder:

   ```sh
   git init
   git add .
   git commit -m "Create RGA Global website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/rga-global-website.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to sign in, follow the browser prompt.

3. On GitHub, open the repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main**, folder **/(root)**, and click **Save**.
6. Wait a few minutes. GitHub will show your website address on the Pages settings screen. Future pushes to `main` update the website.

## Before publishing

- Add a real, monitored business email or contact method to `contact.html`.
- The partner inquiry form is a nonfunctional visual preview. GitHub Pages cannot receive or store submissions. Connect a form service or use a business email before inviting people to submit inquiries.
- Review `privacy.html` and `terms.html` with appropriate counsel; the included copy is starter text, not legal advice.
- Confirm all campaign descriptions match RGA Global LLC's actual current offerings.
- The display font loads from Google Fonts when visitors are online; the page uses fallback fonts if that request is unavailable.
