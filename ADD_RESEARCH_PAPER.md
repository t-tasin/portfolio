# How to Add Your Research Paper PDF

## Quick Guide: Adding Your Multi-Agent AV Paper

### Method 1: Host PDF in Your Portfolio (Recommended)

**Step 1:** Copy your PDF to the documents folder
```bash
# From your portfolio directory
cp ~/path/to/your-paper.pdf public/documents/multi-agent-av-routing.pdf
```

**Step 2:** The link is already configured!
- Your paper will be accessible at: `/documents/multi-agent-av-routing.pdf`
- When someone clicks "Read Paper" on your portfolio, it will open the PDF
- ✅ Already set up in `data/portfolio.ts`

**Step 3:** Test it
```bash
# Make sure your PDF is there
ls -lh public/documents/
```

### Method 2: Use Google Drive (Alternative)

**Pros:**
- No file size limits
- Can update the PDF anytime without redeploying
- Professional appearance

**Steps:**

1. Upload your PDF to Google Drive
2. Right-click → Share → Change to "Anyone with the link"
3. Click "Copy link"
4. Get the direct download link:
   - Original: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - Convert to: `https://drive.google.com/uc?export=download&id=FILE_ID`

5. Update in `data/portfolio.ts`:
```typescript
links: {
  paper: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
  github: "#",
},
```

### Method 3: Use ResearchGate (For Published/Preprint)

**Best for:** Academic credibility, networking with researchers

1. Create/Login to ResearchGate account
2. Upload your paper
3. Get the direct link
4. Update in `data/portfolio.ts`

**Note:** ResearchGate shows download counts and citations - great for published work!

### Method 4: Use arXiv (For Preprints)

**Best for:** Pre-publication sharing, academic recognition

1. Submit to arXiv.org (if your paper qualifies)
2. Get the arXiv URL (e.g., `https://arxiv.org/abs/2401.12345`)
3. Update in `data/portfolio.ts`

**Note:** arXiv is highly respected in academic circles!

---

## Showing Paper Status (Under Review, Published, etc.)

I've added a `researchStatus` object to your portfolio data. To display this on your site:

### Option 1: Update the Research component to show status

Edit `components/Research.tsx` to display the status badge.

### Current Structure:
```typescript
export const researchStatus = {
  "Multi-Agent Coordination in Autonomous Vehicle Routing: A Simulation-Based Study": "Under Review",
  "Sentiment Analysis in Software Engineering: Evaluating Generative Pre-trained Transformers": "Published"
};
```

---

## Recommended Approach Based on Your Situation:

### For "Multi-Agent AV Routing" (Pending Publication):
✅ **Use Method 1** (Host in portfolio) OR **Method 2** (Google Drive)

**Why?**
- You have full control
- Can update anytime
- No restrictions from publishers
- Professional presentation

### For "Sentiment Analysis" Paper (If Published):
✅ **Use the official publisher link** OR **ResearchGate**

**Why?**
- Increases paper visibility
- Counts toward citations
- More credible

---

## Quick Setup Now:

Run this command to add your paper:

```bash
# Replace ~/Downloads/your-paper.pdf with your actual file path
cp ~/Downloads/multi-agent-av-paper.pdf /Users/tasin/Desktop/Codebase.nosync/tsaifullah/portfolio/public/documents/multi-agent-av-routing.pdf
```

Then refresh your portfolio at http://localhost:3001 and click "Read Paper" under your research!

---

## File Size Considerations:

- **Portfolio hosting:** Keep PDFs under 5-10 MB for fast loading
- **If larger:** Use Google Drive or similar cloud storage
- **Optimize PDF:** Use tools like Adobe Acrobat or online compressors to reduce size

---

## Security Note:

If your paper contains sensitive information or you want to track downloads:
- Consider using Google Drive with link tracking
- Or use a service like Figshare or Zenodo (permanent DOI)
