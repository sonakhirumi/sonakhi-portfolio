// TikTakGo CBSE Class 10 Mathematics Chapter Video Curriculum
export interface TikTakGoVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface TikTakGoChapter {
  chapterNumber: number;
  chapterTitle: string;
  playlistId: string;
  playlistUrl: string;
  videos: TikTakGoVideo[];
}

export const TIKTAKGO_CHAPTERS: TikTakGoChapter[] = [
  {
    "chapterNumber": 1,
    "chapterTitle": "Real Numbers",
    "playlistId": "PL_30uyU-bC-03_KeLcw8RHdZrT852DzTC",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-03_KeLcw8RHdZrT852DzTC",
    "videos": [
      {
        "id": "q4Wm7k56mG4",
        "title": "Prime & Composite Numbers",
        "url": "https://www.youtube.com/watch?v=q4Wm7k56mG4",
        "thumbnail": "https://i.ytimg.com/vi/q4Wm7k56mG4/hqdefault.jpg"
      },
      {
        "id": "NGJciWHtJRk",
        "title": "Prime Factorisation",
        "url": "https://www.youtube.com/watch?v=NGJciWHtJRk",
        "thumbnail": "https://i.ytimg.com/vi/NGJciWHtJRk/hqdefault.jpg"
      },
      {
        "id": "jLJ6JE_lrRM",
        "title": "How to Find HCF by Prime Factorisation",
        "url": "https://www.youtube.com/watch?v=jLJ6JE_lrRM",
        "thumbnail": "https://i.ytimg.com/vi/jLJ6JE_lrRM/hqdefault.jpg"
      },
      {
        "id": "cASKXKs1gdI",
        "title": "LCM",
        "url": "https://www.youtube.com/watch?v=cASKXKs1gdI",
        "thumbnail": "https://i.ytimg.com/vi/cASKXKs1gdI/hqdefault.jpg"
      },
      {
        "id": "CveJ8hvX0F8",
        "title": "Relation between HCF and LCM",
        "url": "https://www.youtube.com/watch?v=CveJ8hvX0F8",
        "thumbnail": "https://i.ytimg.com/vi/CveJ8hvX0F8/hqdefault.jpg"
      },
      {
        "id": "Mv9fHYrLLMU",
        "title": "Time Interval Based Tricky Question",
        "url": "https://www.youtube.com/watch?v=Mv9fHYrLLMU",
        "thumbnail": "https://i.ytimg.com/vi/Mv9fHYrLLMU/hqdefault.jpg"
      },
      {
        "id": "ATqIOvk5Vik",
        "title": "Equal Distribution Based Tricky Questions",
        "url": "https://www.youtube.com/watch?v=ATqIOvk5Vik",
        "thumbnail": "https://i.ytimg.com/vi/ATqIOvk5Vik/hqdefault.jpg"
      },
      {
        "id": "blO466WM7II",
        "title": "Irrational Numbers Explained",
        "url": "https://www.youtube.com/watch?v=blO466WM7II",
        "thumbnail": "https://i.ytimg.com/vi/blO466WM7II/hqdefault.jpg"
      },
      {
        "id": "XxZtVkNPCZc",
        "title": "Proving Irrationality",
        "url": "https://www.youtube.com/watch?v=XxZtVkNPCZc",
        "thumbnail": "https://i.ytimg.com/vi/XxZtVkNPCZc/hqdefault.jpg"
      },
      {
        "id": "ZJAmVjunYEI",
        "title": "Divisibility Based Tricky Question",
        "url": "https://www.youtube.com/watch?v=ZJAmVjunYEI",
        "thumbnail": "https://i.ytimg.com/vi/ZJAmVjunYEI/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 2,
    "chapterTitle": "Polynomials",
    "playlistId": "PL_30uyU-bC-272v1Dl0MDaXs34RKln6mY",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-272v1Dl0MDaXs34RKln6mY",
    "videos": [
      {
        "id": "FEVOkpVT3aw",
        "title": "Relationship between Zeroes and Coefficients of a Cubic Polynomial",
        "url": "https://www.youtube.com/watch?v=FEVOkpVT3aw",
        "thumbnail": "https://i.ytimg.com/vi/FEVOkpVT3aw/hqdefault.jpg"
      },
      {
        "id": "wTjsGtsV1x4",
        "title": "Relationship Between Zeroes and Coefficients of a Quadratic Polynomial",
        "url": "https://www.youtube.com/watch?v=wTjsGtsV1x4",
        "thumbnail": "https://i.ytimg.com/vi/wTjsGtsV1x4/hqdefault.jpg"
      },
      {
        "id": "qX9uxKBCCDw",
        "title": "Quadratic Polynomials: Tricky Questions on Zeroes and Their Reciprocals",
        "url": "https://www.youtube.com/watch?v=qX9uxKBCCDw",
        "thumbnail": "https://i.ytimg.com/vi/qX9uxKBCCDw/hqdefault.jpg"
      },
      {
        "id": "xzc16q0fiBg",
        "title": "Finding Quadratic Polynomial through Sum and Product of its Zeroes",
        "url": "https://www.youtube.com/watch?v=xzc16q0fiBg",
        "thumbnail": "https://i.ytimg.com/vi/xzc16q0fiBg/hqdefault.jpg"
      },
      {
        "id": "mxw0X1QJWbI",
        "title": "Relationship Between Zeroes and Coefficients of a Linear Polynomial",
        "url": "https://www.youtube.com/watch?v=mxw0X1QJWbI",
        "thumbnail": "https://i.ytimg.com/vi/mxw0X1QJWbI/hqdefault.jpg"
      },
      {
        "id": "jNdd7_2E6G8",
        "title": "Geometrical Meaning of the Zeroes of a Cubic Polynomial",
        "url": "https://www.youtube.com/watch?v=jNdd7_2E6G8",
        "thumbnail": "https://i.ytimg.com/vi/jNdd7_2E6G8/hqdefault.jpg"
      },
      {
        "id": "_sCq8BppXUk",
        "title": "Geometrical Meaning of Zeroes of a Quadratic Polynomial",
        "url": "https://www.youtube.com/watch?v=_sCq8BppXUk",
        "thumbnail": "https://i.ytimg.com/vi/_sCq8BppXUk/hqdefault.jpg"
      },
      {
        "id": "vTcEHAH6iJc",
        "title": "Geometrical Meaning of the Zeroes of a Linear Polynomial",
        "url": "https://www.youtube.com/watch?v=vTcEHAH6iJc",
        "thumbnail": "https://i.ytimg.com/vi/vTcEHAH6iJc/hqdefault.jpg"
      },
      {
        "id": "PSlLVe2dyNA",
        "title": "Value and Zero of a Polynomial",
        "url": "https://www.youtube.com/watch?v=PSlLVe2dyNA",
        "thumbnail": "https://i.ytimg.com/vi/PSlLVe2dyNA/hqdefault.jpg"
      },
      {
        "id": "bAOTWq-CBco",
        "title": "What are Polynomials?",
        "url": "https://www.youtube.com/watch?v=bAOTWq-CBco",
        "thumbnail": "https://i.ytimg.com/vi/bAOTWq-CBco/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 3,
    "chapterTitle": "Linear Equations in Two Variables",
    "playlistId": "PL_30uyU-bC-1m_l3oIl3o2qnAMwQq5dTE",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-1m_l3oIl3o2qnAMwQq5dTE",
    "videos": [
      {
        "id": "THfzE7l5r1A",
        "title": "Number of Solutions for a Pair of Linear Equations in Two Variables",
        "url": "https://www.youtube.com/watch?v=THfzE7l5r1A",
        "thumbnail": "https://i.ytimg.com/vi/THfzE7l5r1A/hqdefault.jpg"
      },
      {
        "id": "WPD007cGD60",
        "title": "Solve Linear Equations in Two Variables Graphically",
        "url": "https://www.youtube.com/watch?v=WPD007cGD60",
        "thumbnail": "https://i.ytimg.com/vi/WPD007cGD60/hqdefault.jpg"
      },
      {
        "id": "8PpergLVaHQ",
        "title": "Substitution Method",
        "url": "https://www.youtube.com/watch?v=8PpergLVaHQ",
        "thumbnail": "https://i.ytimg.com/vi/8PpergLVaHQ/hqdefault.jpg"
      },
      {
        "id": "kBhK24-bb2Q",
        "title": "Elimination Method",
        "url": "https://www.youtube.com/watch?v=kBhK24-bb2Q",
        "thumbnail": "https://i.ytimg.com/vi/kBhK24-bb2Q/hqdefault.jpg"
      },
      {
        "id": "AI4cG3b2dMA",
        "title": "Pair of Linear Equations in Two Variables",
        "url": "https://www.youtube.com/watch?v=AI4cG3b2dMA",
        "thumbnail": "https://i.ytimg.com/vi/AI4cG3b2dMA/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 4,
    "chapterTitle": "Quadratic Equations",
    "playlistId": "PL_30uyU-bC-34vH69a-LiEfXWf1sypdPF",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-34vH69a-LiEfXWf1sypdPF",
    "videos": [
      {
        "id": "wulL2Xo0r58",
        "title": "Right Triangles and Quadratic Equations",
        "url": "https://www.youtube.com/watch?v=wulL2Xo0r58",
        "thumbnail": "https://i.ytimg.com/vi/wulL2Xo0r58/hqdefault.jpg"
      },
      {
        "id": "6B65d8w_SUA",
        "title": "Price and Profit based Word Problem",
        "url": "https://www.youtube.com/watch?v=6B65d8w_SUA",
        "thumbnail": "https://i.ytimg.com/vi/6B65d8w_SUA/hqdefault.jpg"
      },
      {
        "id": "O67c51i81HE",
        "title": "Quadratic Equations",
        "url": "https://www.youtube.com/watch?v=O67c51i81HE",
        "thumbnail": "https://i.ytimg.com/vi/O67c51i81HE/hqdefault.jpg"
      },
      {
        "id": "4Y7qOJmSR1U",
        "title": "Mensuration Word Problem in Quadratic Equations",
        "url": "https://www.youtube.com/watch?v=4Y7qOJmSR1U",
        "thumbnail": "https://i.ytimg.com/vi/4Y7qOJmSR1U/hqdefault.jpg"
      },
      {
        "id": "0o3h9Y7dbuQ",
        "title": "Time and Work Word Problem",
        "url": "https://www.youtube.com/watch?v=0o3h9Y7dbuQ",
        "thumbnail": "https://i.ytimg.com/vi/0o3h9Y7dbuQ/hqdefault.jpg"
      },
      {
        "id": "nvYWDGyoZuM",
        "title": "Boat & Stream Word Problem",
        "url": "https://www.youtube.com/watch?v=nvYWDGyoZuM",
        "thumbnail": "https://i.ytimg.com/vi/nvYWDGyoZuM/hqdefault.jpg"
      },
      {
        "id": "6IsklkZLBGs",
        "title": "Find the Value of k When Roots are Real and Equal",
        "url": "https://www.youtube.com/watch?v=6IsklkZLBGs",
        "thumbnail": "https://i.ytimg.com/vi/6IsklkZLBGs/hqdefault.jpg"
      },
      {
        "id": "O-6xcm7mjvw",
        "title": "Age Problems in Quadratic Equations",
        "url": "https://www.youtube.com/watch?v=O-6xcm7mjvw",
        "thumbnail": "https://i.ytimg.com/vi/O-6xcm7mjvw/hqdefault.jpg"
      },
      {
        "id": "eYwUAbwGib8",
        "title": "Sum of Squares of 3 Consecutive Numbers",
        "url": "https://www.youtube.com/watch?v=eYwUAbwGib8",
        "thumbnail": "https://i.ytimg.com/vi/eYwUAbwGib8/hqdefault.jpg"
      },
      {
        "id": "zPXpJ4L6KPQ",
        "title": "Nature of Roots & Quadratic Formula",
        "url": "https://www.youtube.com/watch?v=zPXpJ4L6KPQ",
        "thumbnail": "https://i.ytimg.com/vi/zPXpJ4L6KPQ/hqdefault.jpg"
      },
      {
        "id": "4_LUiA_zRYU",
        "title": "Verification & Finding Constants",
        "url": "https://www.youtube.com/watch?v=4_LUiA_zRYU",
        "thumbnail": "https://i.ytimg.com/vi/4_LUiA_zRYU/hqdefault.jpg"
      },
      {
        "id": "qpOCNPtZO_I",
        "title": "Factorisation Method",
        "url": "https://www.youtube.com/watch?v=qpOCNPtZO_I",
        "thumbnail": "https://i.ytimg.com/vi/qpOCNPtZO_I/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 5,
    "chapterTitle": "Arithmetic Progressions",
    "playlistId": "PL_30uyU-bC-3Bg0IpGtsoChdejd82jxcm",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-3Bg0IpGtsoChdejd82jxcm",
    "videos": [
      {
        "id": "cYCYxJ9p5Iw",
        "title": "Introduction to Arithmetic Progression",
        "url": "https://www.youtube.com/watch?v=cYCYxJ9p5Iw",
        "thumbnail": "https://i.ytimg.com/vi/cYCYxJ9p5Iw/hqdefault.jpg"
      },
      {
        "id": "47vkAjVvF0Q",
        "title": "Writing next terms of an AP",
        "url": "https://www.youtube.com/watch?v=47vkAjVvF0Q",
        "thumbnail": "https://i.ytimg.com/vi/47vkAjVvF0Q/hqdefault.jpg"
      },
      {
        "id": "LTrcn6SR744",
        "title": "Finding the nth Term of an AP",
        "url": "https://www.youtube.com/watch?v=LTrcn6SR744",
        "thumbnail": "https://i.ytimg.com/vi/LTrcn6SR744/hqdefault.jpg"
      },
      {
        "id": "Ox4MMEeCMHc",
        "title": "Finding the Position of the nth Term",
        "url": "https://www.youtube.com/watch?v=Ox4MMEeCMHc",
        "thumbnail": "https://i.ytimg.com/vi/Ox4MMEeCMHc/hqdefault.jpg"
      },
      {
        "id": "5vOGrGqcQFE",
        "title": "Finding nth Term From pth and qth Terms",
        "url": "https://www.youtube.com/watch?v=5vOGrGqcQFE",
        "thumbnail": "https://i.ytimg.com/vi/5vOGrGqcQFE/hqdefault.jpg"
      },
      {
        "id": "86aY3B0lGUc",
        "title": "How Many Two-Digit Numbers are Divisible by 7",
        "url": "https://www.youtube.com/watch?v=86aY3B0lGUc",
        "thumbnail": "https://i.ytimg.com/vi/86aY3B0lGUc/hqdefault.jpg"
      },
      {
        "id": "ZAKXVwdCpzE",
        "title": "Simple Interest and AP",
        "url": "https://www.youtube.com/watch?v=ZAKXVwdCpzE",
        "thumbnail": "https://i.ytimg.com/vi/ZAKXVwdCpzE/hqdefault.jpg"
      },
      {
        "id": "jMlH_DHyJds",
        "title": "Finding terms from the end of an AP",
        "url": "https://www.youtube.com/watch?v=jMlH_DHyJds",
        "thumbnail": "https://i.ytimg.com/vi/jMlH_DHyJds/hqdefault.jpg"
      },
      {
        "id": "bq1Zh7JMe_Y",
        "title": "Ratio of Sum of Terms in Two Different APs",
        "url": "https://www.youtube.com/watch?v=bq1Zh7JMe_Y",
        "thumbnail": "https://i.ytimg.com/vi/bq1Zh7JMe_Y/hqdefault.jpg"
      },
      {
        "id": "4UW25xQDhFo",
        "title": "Finding the Sum of Terms in an AP When nth Term is Given",
        "url": "https://www.youtube.com/watch?v=4UW25xQDhFo",
        "thumbnail": "https://i.ytimg.com/vi/4UW25xQDhFo/hqdefault.jpg"
      },
      {
        "id": "XKvE3OxS80I",
        "title": "Sum of First n Terms When Two Other Sums are Given | Chapter 5 Class 10",
        "url": "https://www.youtube.com/watch?v=XKvE3OxS80I",
        "thumbnail": "https://i.ytimg.com/vi/XKvE3OxS80I/hqdefault.jpg"
      },
      {
        "id": "9uM0HaBtSig",
        "title": "Find the nth term when sum of n terms is given  | Chapter 5 Class 10",
        "url": "https://www.youtube.com/watch?v=9uM0HaBtSig",
        "thumbnail": "https://i.ytimg.com/vi/9uM0HaBtSig/hqdefault.jpg"
      },
      {
        "id": "TgP4YCnBAJw",
        "title": "Sum of n Terms of an AP",
        "url": "https://www.youtube.com/watch?v=TgP4YCnBAJw",
        "thumbnail": "https://i.ytimg.com/vi/TgP4YCnBAJw/hqdefault.jpg"
      },
      {
        "id": "gjlNvuWqG_A",
        "title": "Sum of Integers Divisible by 9",
        "url": "https://www.youtube.com/watch?v=gjlNvuWqG_A",
        "thumbnail": "https://i.ytimg.com/vi/gjlNvuWqG_A/hqdefault.jpg"
      },
      {
        "id": "Wj628T8oJpc",
        "title": "Arithmetic Progression Word Problems",
        "url": "https://www.youtube.com/watch?v=Wj628T8oJpc",
        "thumbnail": "https://i.ytimg.com/vi/Wj628T8oJpc/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 6,
    "chapterTitle": "Triangles",
    "playlistId": "PL_30uyU-bC-21WvrNHQxo2rDrcE6UqqcF",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-21WvrNHQxo2rDrcE6UqqcF",
    "videos": [
      {
        "id": "TC8qmXxE13c",
        "title": "SSS Similarity Criterion Proof",
        "url": "https://www.youtube.com/watch?v=TC8qmXxE13c",
        "thumbnail": "https://i.ytimg.com/vi/TC8qmXxE13c/hqdefault.jpg"
      },
      {
        "id": "BLxzowUyc0g",
        "title": "AAA Similarity Theorem",
        "url": "https://www.youtube.com/watch?v=BLxzowUyc0g",
        "thumbnail": "https://i.ytimg.com/vi/BLxzowUyc0g/hqdefault.jpg"
      },
      {
        "id": "oeClsoRO6WY",
        "title": "Cases of BPT",
        "url": "https://www.youtube.com/watch?v=oeClsoRO6WY",
        "thumbnail": "https://i.ytimg.com/vi/oeClsoRO6WY/hqdefault.jpg"
      },
      {
        "id": "1sY4bGD90zo",
        "title": "Criteria for Congruency",
        "url": "https://www.youtube.com/watch?v=1sY4bGD90zo",
        "thumbnail": "https://i.ytimg.com/vi/1sY4bGD90zo/hqdefault.jpg"
      },
      {
        "id": "rDP_b3_qHFE",
        "title": "SAS Similarity Criterion",
        "url": "https://www.youtube.com/watch?v=rDP_b3_qHFE",
        "thumbnail": "https://i.ytimg.com/vi/rDP_b3_qHFE/hqdefault.jpg"
      },
      {
        "id": "3Ex7MsRPyb8",
        "title": "Converse of Basic Proportionality Theorem",
        "url": "https://www.youtube.com/watch?v=3Ex7MsRPyb8",
        "thumbnail": "https://i.ytimg.com/vi/3Ex7MsRPyb8/hqdefault.jpg"
      },
      {
        "id": "3h9mIU1xIVs",
        "title": "Basic Proportionality Theorem",
        "url": "https://www.youtube.com/watch?v=3h9mIU1xIVs",
        "thumbnail": "https://i.ytimg.com/vi/3h9mIU1xIVs/hqdefault.jpg"
      },
      {
        "id": "MRjjpuowx3Q",
        "title": "Similar Triangles",
        "url": "https://www.youtube.com/watch?v=MRjjpuowx3Q",
        "thumbnail": "https://i.ytimg.com/vi/MRjjpuowx3Q/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 7,
    "chapterTitle": "Coordinate Geometry",
    "playlistId": "PL_30uyU-bC-2Fwvb9ybTZgYRlw69c_A9W",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-2Fwvb9ybTZgYRlw69c_A9W",
    "videos": [
      {
        "id": "g9YahUBAflg",
        "title": "Points of Trisection",
        "url": "https://www.youtube.com/watch?v=g9YahUBAflg",
        "thumbnail": "https://i.ytimg.com/vi/g9YahUBAflg/hqdefault.jpg"
      },
      {
        "id": "DoT834XZl9M",
        "title": "Finding Unknown Vertices",
        "url": "https://www.youtube.com/watch?v=DoT834XZl9M",
        "thumbnail": "https://i.ytimg.com/vi/DoT834XZl9M/hqdefault.jpg"
      },
      {
        "id": "8yaGghVPAXE",
        "title": "Section Ratio & Section Point",
        "url": "https://www.youtube.com/watch?v=8yaGghVPAXE",
        "thumbnail": "https://i.ytimg.com/vi/8yaGghVPAXE/hqdefault.jpg"
      },
      {
        "id": "dnZ1pIkXZmQ",
        "title": "Section Formula Ratio k:1",
        "url": "https://www.youtube.com/watch?v=dnZ1pIkXZmQ",
        "thumbnail": "https://i.ytimg.com/vi/dnZ1pIkXZmQ/hqdefault.jpg"
      },
      {
        "id": "QtNWohJyJDA",
        "title": "Section Formula Derivation",
        "url": "https://www.youtube.com/watch?v=QtNWohJyJDA",
        "thumbnail": "https://i.ytimg.com/vi/QtNWohJyJDA/hqdefault.jpg"
      },
      {
        "id": "iTB6v7u1XbE",
        "title": "Geometrical Figures using Coordinate Geometry",
        "url": "https://www.youtube.com/watch?v=iTB6v7u1XbE",
        "thumbnail": "https://i.ytimg.com/vi/iTB6v7u1XbE/hqdefault.jpg"
      },
      {
        "id": "bfHHnkydXH8",
        "title": "Distance Formula: Equidistant Points",
        "url": "https://www.youtube.com/watch?v=bfHHnkydXH8",
        "thumbnail": "https://i.ytimg.com/vi/bfHHnkydXH8/hqdefault.jpg"
      },
      {
        "id": "JhSr_HvRH6o",
        "title": "Distance Formula",
        "url": "https://www.youtube.com/watch?v=JhSr_HvRH6o",
        "thumbnail": "https://i.ytimg.com/vi/JhSr_HvRH6o/hqdefault.jpg"
      },
      {
        "id": "qEDNEQ5xCPg",
        "title": "Collinear Points",
        "url": "https://www.youtube.com/watch?v=qEDNEQ5xCPg",
        "thumbnail": "https://i.ytimg.com/vi/qEDNEQ5xCPg/hqdefault.jpg"
      },
      {
        "id": "0VAi2p5-kmo",
        "title": "Coordinate Geometry",
        "url": "https://www.youtube.com/watch?v=0VAi2p5-kmo",
        "thumbnail": "https://i.ytimg.com/vi/0VAi2p5-kmo/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 8,
    "chapterTitle": "Introduction to Trigonometry",
    "playlistId": "PL_30uyU-bC-1qiYRagalRYGOGhr2mA_zP",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-1qiYRagalRYGOGhr2mA_zP",
    "videos": [
      {
        "id": "Ftu39DwywXY",
        "title": "Trigonometry Table",
        "url": "https://www.youtube.com/watch?v=Ftu39DwywXY",
        "thumbnail": "https://i.ytimg.com/vi/Ftu39DwywXY/hqdefault.jpg"
      },
      {
        "id": "oLAI1Mrj8Qw",
        "title": "Trigonometry Proof",
        "url": "https://www.youtube.com/watch?v=oLAI1Mrj8Qw",
        "thumbnail": "https://i.ytimg.com/vi/oLAI1Mrj8Qw/hqdefault.jpg"
      },
      {
        "id": "FAl5ZRpBgBQ",
        "title": "Expressing Trigonometric Ratios",
        "url": "https://www.youtube.com/watch?v=FAl5ZRpBgBQ",
        "thumbnail": "https://i.ytimg.com/vi/FAl5ZRpBgBQ/hqdefault.jpg"
      },
      {
        "id": "FiBqvT3EFYA",
        "title": "Trigonometric Ratios of Specific Angles",
        "url": "https://www.youtube.com/watch?v=FiBqvT3EFYA",
        "thumbnail": "https://i.ytimg.com/vi/FiBqvT3EFYA/hqdefault.jpg"
      },
      {
        "id": "H2esOjDWxlw",
        "title": "Cosec, Sec and Cot",
        "url": "https://www.youtube.com/watch?v=H2esOjDWxlw",
        "thumbnail": "https://i.ytimg.com/vi/H2esOjDWxlw/hqdefault.jpg"
      },
      {
        "id": "jJ2jjT7lqB8",
        "title": "Trigonometric Ratios of Sin, Cos, and Tan",
        "url": "https://www.youtube.com/watch?v=jJ2jjT7lqB8",
        "thumbnail": "https://i.ytimg.com/vi/jJ2jjT7lqB8/hqdefault.jpg"
      },
      {
        "id": "pgeD9RTUT1I",
        "title": "Introduction to Trigonometry",
        "url": "https://www.youtube.com/watch?v=pgeD9RTUT1I",
        "thumbnail": "https://i.ytimg.com/vi/pgeD9RTUT1I/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 9,
    "chapterTitle": "Some Applications of Trigonometry",
    "playlistId": "PL_30uyU-bC-1dLxjdXHv2peznTbx4zp5y",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-1dLxjdXHv2peznTbx4zp5y",
    "videos": [
      {
        "id": "taG3BWHZ_ak",
        "title": "Distance and Width Based Questions",
        "url": "https://www.youtube.com/watch?v=taG3BWHZ_ak",
        "thumbnail": "https://i.ytimg.com/vi/taG3BWHZ_ak/hqdefault.jpg"
      },
      {
        "id": "b_NSWavqoy0",
        "title": "Heights and Distances",
        "url": "https://www.youtube.com/watch?v=b_NSWavqoy0",
        "thumbnail": "https://i.ytimg.com/vi/b_NSWavqoy0/hqdefault.jpg"
      },
      {
        "id": "CRPzWLVVpd4",
        "title": "Angle of Depression",
        "url": "https://www.youtube.com/watch?v=CRPzWLVVpd4",
        "thumbnail": "https://i.ytimg.com/vi/CRPzWLVVpd4/hqdefault.jpg"
      },
      {
        "id": "16ZwVN4mUvs",
        "title": "Line of Sight & Angle of Elevation",
        "url": "https://www.youtube.com/watch?v=16ZwVN4mUvs",
        "thumbnail": "https://i.ytimg.com/vi/16ZwVN4mUvs/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 10,
    "chapterTitle": "Circles",
    "playlistId": "PL_30uyU-bC-18FhuaT63hob6cxSr7yEeC",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-18FhuaT63hob6cxSr7yEeC",
    "videos": [
      {
        "id": "MzK_FrytiQI",
        "title": "Tangents and Perpendicularity to Radius",
        "url": "https://www.youtube.com/watch?v=MzK_FrytiQI",
        "thumbnail": "https://i.ytimg.com/vi/MzK_FrytiQI/hqdefault.jpg"
      },
      {
        "id": "3zCR5XUZDjI",
        "title": "Tangents from an External Point are Equal",
        "url": "https://www.youtube.com/watch?v=3zCR5XUZDjI",
        "thumbnail": "https://i.ytimg.com/vi/3zCR5XUZDjI/hqdefault.jpg"
      },
      {
        "id": "JAf6GcOVd5Y",
        "title": "Finding the Length of Tangent When Chord is Given",
        "url": "https://www.youtube.com/watch?v=JAf6GcOVd5Y",
        "thumbnail": "https://i.ytimg.com/vi/JAf6GcOVd5Y/hqdefault.jpg"
      },
      {
        "id": "lEf0eHOSB14",
        "title": "Angle between Two Tangents of a Circle",
        "url": "https://www.youtube.com/watch?v=lEf0eHOSB14",
        "thumbnail": "https://i.ytimg.com/vi/lEf0eHOSB14/hqdefault.jpg"
      },
      {
        "id": "-Q5FCYbq2NE",
        "title": "Tangents to a Circle",
        "url": "https://www.youtube.com/watch?v=-Q5FCYbq2NE",
        "thumbnail": "https://i.ytimg.com/vi/-Q5FCYbq2NE/hqdefault.jpg"
      },
      {
        "id": "h7e9wm2Hc-8",
        "title": "Circles",
        "url": "https://www.youtube.com/watch?v=h7e9wm2Hc-8",
        "thumbnail": "https://i.ytimg.com/vi/h7e9wm2Hc-8/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 11,
    "chapterTitle": "Areas Related to Circles",
    "playlistId": "PL_30uyU-bC-2npf2VZXBmmYQxcxO8SSnj",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-2npf2VZXBmmYQxcxO8SSnj",
    "videos": [
      {
        "id": "SWYKHXwSh7s",
        "title": "Ratio of Areas of 3 Concentric Circles",
        "url": "https://www.youtube.com/watch?v=SWYKHXwSh7s",
        "thumbnail": "https://i.ytimg.com/vi/SWYKHXwSh7s/hqdefault.jpg"
      },
      {
        "id": "HzU6AleWZeg",
        "title": "Length of an Arc and Area of a Segment",
        "url": "https://www.youtube.com/watch?v=HzU6AleWZeg",
        "thumbnail": "https://i.ytimg.com/vi/HzU6AleWZeg/hqdefault.jpg"
      },
      {
        "id": "BDhRlEKBSdk",
        "title": "Area of Sector",
        "url": "https://www.youtube.com/watch?v=BDhRlEKBSdk",
        "thumbnail": "https://i.ytimg.com/vi/BDhRlEKBSdk/hqdefault.jpg"
      },
      {
        "id": "AnsRSrGd0TE",
        "title": "Perimeter of a Sector",
        "url": "https://www.youtube.com/watch?v=AnsRSrGd0TE",
        "thumbnail": "https://i.ytimg.com/vi/AnsRSrGd0TE/hqdefault.jpg"
      },
      {
        "id": "7jomvZabWBw",
        "title": "Sector and Segment of a Circle",
        "url": "https://www.youtube.com/watch?v=7jomvZabWBw",
        "thumbnail": "https://i.ytimg.com/vi/7jomvZabWBw/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 12,
    "chapterTitle": "Surface Areas and Volumes",
    "playlistId": "PL_30uyU-bC-3s1cGnIXHsiTzgln6xHHh1",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-3s1cGnIXHsiTzgln6xHHh1",
    "videos": [
      {
        "id": "RNkl6noJduE",
        "title": "Hollow Sphere & Hollow Hemisphere",
        "url": "https://www.youtube.com/watch?v=RNkl6noJduE",
        "thumbnail": "https://i.ytimg.com/vi/RNkl6noJduE/hqdefault.jpg"
      },
      {
        "id": "H7uHj_0aDYo",
        "title": "Sphere & Hemisphere",
        "url": "https://www.youtube.com/watch?v=H7uHj_0aDYo",
        "thumbnail": "https://i.ytimg.com/vi/H7uHj_0aDYo/hqdefault.jpg"
      },
      {
        "id": "ixOukMc0ZEk",
        "title": "Surface Area of Combinations of Solids",
        "url": "https://www.youtube.com/watch?v=ixOukMc0ZEk",
        "thumbnail": "https://i.ytimg.com/vi/ixOukMc0ZEk/hqdefault.jpg"
      },
      {
        "id": "Mv4R2LlwlDU",
        "title": "Volume of Combination of Solids",
        "url": "https://www.youtube.com/watch?v=Mv4R2LlwlDU",
        "thumbnail": "https://i.ytimg.com/vi/Mv4R2LlwlDU/hqdefault.jpg"
      },
      {
        "id": "0r7ztqi_U5Q",
        "title": "Right Circular Cone",
        "url": "https://www.youtube.com/watch?v=0r7ztqi_U5Q",
        "thumbnail": "https://i.ytimg.com/vi/0r7ztqi_U5Q/hqdefault.jpg"
      },
      {
        "id": "38zHkBJXeOg",
        "title": "Cube",
        "url": "https://www.youtube.com/watch?v=38zHkBJXeOg",
        "thumbnail": "https://i.ytimg.com/vi/38zHkBJXeOg/hqdefault.jpg"
      },
      {
        "id": "MU0Dhjj1bNs",
        "title": "Right Circular Hollow Cylinder",
        "url": "https://www.youtube.com/watch?v=MU0Dhjj1bNs",
        "thumbnail": "https://i.ytimg.com/vi/MU0Dhjj1bNs/hqdefault.jpg"
      },
      {
        "id": "Hdk9kgbBds0",
        "title": "Right Circular Cylinder",
        "url": "https://www.youtube.com/watch?v=Hdk9kgbBds0",
        "thumbnail": "https://i.ytimg.com/vi/Hdk9kgbBds0/hqdefault.jpg"
      },
      {
        "id": "m_N5eQkZUeg",
        "title": "Cuboid",
        "url": "https://www.youtube.com/watch?v=m_N5eQkZUeg",
        "thumbnail": "https://i.ytimg.com/vi/m_N5eQkZUeg/hqdefault.jpg"
      },
      {
        "id": "ObQroeRIhps",
        "title": "Surface Area and Volume",
        "url": "https://www.youtube.com/watch?v=ObQroeRIhps",
        "thumbnail": "https://i.ytimg.com/vi/ObQroeRIhps/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 13,
    "chapterTitle": "Statistics",
    "playlistId": "PL_30uyU-bC-1a_hH5qxmCq9kBkwo0oh_Y",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-1a_hH5qxmCq9kBkwo0oh_Y",
    "videos": [
      {
        "id": "3BGkBaozldk",
        "title": "Median of Grouped Data",
        "url": "https://www.youtube.com/watch?v=3BGkBaozldk",
        "thumbnail": "https://i.ytimg.com/vi/3BGkBaozldk/hqdefault.jpg"
      },
      {
        "id": "Rp45LMjOMbk",
        "title": "Mode of Grouped Data",
        "url": "https://www.youtube.com/watch?v=Rp45LMjOMbk",
        "thumbnail": "https://i.ytimg.com/vi/Rp45LMjOMbk/hqdefault.jpg"
      },
      {
        "id": "iTf4amEdLTM",
        "title": "Step Deviation Method for Grouped Data",
        "url": "https://www.youtube.com/watch?v=iTf4amEdLTM",
        "thumbnail": "https://i.ytimg.com/vi/iTf4amEdLTM/hqdefault.jpg"
      },
      {
        "id": "hjfHPrLkXT8",
        "title": "Assumed Mean Method for Grouped Data",
        "url": "https://www.youtube.com/watch?v=hjfHPrLkXT8",
        "thumbnail": "https://i.ytimg.com/vi/hjfHPrLkXT8/hqdefault.jpg"
      },
      {
        "id": "lL2FnW-QJZk",
        "title": "Mean of Ungrouped Data",
        "url": "https://www.youtube.com/watch?v=lL2FnW-QJZk",
        "thumbnail": "https://i.ytimg.com/vi/lL2FnW-QJZk/hqdefault.jpg"
      },
      {
        "id": "wXiVI13SQ90",
        "title": "Relationship Between Mean, Median, and Mode",
        "url": "https://www.youtube.com/watch?v=wXiVI13SQ90",
        "thumbnail": "https://i.ytimg.com/vi/wXiVI13SQ90/hqdefault.jpg"
      },
      {
        "id": "gWnd2YtRWI4",
        "title": "Less Than & More Than Cumulative Frequency",
        "url": "https://www.youtube.com/watch?v=gWnd2YtRWI4",
        "thumbnail": "https://i.ytimg.com/vi/gWnd2YtRWI4/hqdefault.jpg"
      },
      {
        "id": "mDSiSqMoPBA",
        "title": "Cumulative Frequency Table",
        "url": "https://www.youtube.com/watch?v=mDSiSqMoPBA",
        "thumbnail": "https://i.ytimg.com/vi/mDSiSqMoPBA/hqdefault.jpg"
      },
      {
        "id": "YOgmIiwR2SI",
        "title": "Mode in Statistics",
        "url": "https://www.youtube.com/watch?v=YOgmIiwR2SI",
        "thumbnail": "https://i.ytimg.com/vi/YOgmIiwR2SI/hqdefault.jpg"
      },
      {
        "id": "fki0UzR_JBo",
        "title": "Median Formula",
        "url": "https://www.youtube.com/watch?v=fki0UzR_JBo",
        "thumbnail": "https://i.ytimg.com/vi/fki0UzR_JBo/hqdefault.jpg"
      },
      {
        "id": "wHLZawfXGhg",
        "title": "Mean of Grouped Data Using Direct Method",
        "url": "https://www.youtube.com/watch?v=wHLZawfXGhg",
        "thumbnail": "https://i.ytimg.com/vi/wHLZawfXGhg/hqdefault.jpg"
      },
      {
        "id": "H0Y1-xnzc1Y",
        "title": "Continuous and Discontinuous Data",
        "url": "https://www.youtube.com/watch?v=H0Y1-xnzc1Y",
        "thumbnail": "https://i.ytimg.com/vi/H0Y1-xnzc1Y/hqdefault.jpg"
      },
      {
        "id": "dtbcECbtBeE",
        "title": "Introduction to Statistics",
        "url": "https://www.youtube.com/watch?v=dtbcECbtBeE",
        "thumbnail": "https://i.ytimg.com/vi/dtbcECbtBeE/hqdefault.jpg"
      }
    ]
  },
  {
    "chapterNumber": 14,
    "chapterTitle": "Probability",
    "playlistId": "PL_30uyU-bC-0Yfgtpc2NrP0eRsGKDNZX_",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL_30uyU-bC-0Yfgtpc2NrP0eRsGKDNZX_",
    "videos": [
      {
        "id": "yHpMPSgx_4w",
        "title": "Probability of Infinite Outcomes",
        "url": "https://www.youtube.com/watch?v=yHpMPSgx_4w",
        "thumbnail": "https://i.ytimg.com/vi/yHpMPSgx_4w/hqdefault.jpg"
      },
      {
        "id": "uCN7KIxKTKQ",
        "title": "Card-Based Probability Problems",
        "url": "https://www.youtube.com/watch?v=uCN7KIxKTKQ",
        "thumbnail": "https://i.ytimg.com/vi/uCN7KIxKTKQ/hqdefault.jpg"
      },
      {
        "id": "N_RTyd69BhU",
        "title": "Theoretical Approach to Finding Probability",
        "url": "https://www.youtube.com/watch?v=N_RTyd69BhU",
        "thumbnail": "https://i.ytimg.com/vi/N_RTyd69BhU/hqdefault.jpg"
      },
      {
        "id": "vy2c3AVw_WY",
        "title": "Probability of Two Dice",
        "url": "https://www.youtube.com/watch?v=vy2c3AVw_WY",
        "thumbnail": "https://i.ytimg.com/vi/vy2c3AVw_WY/hqdefault.jpg"
      },
      {
        "id": "fjelp5WR1fU",
        "title": "Different Approaches to Probability",
        "url": "https://www.youtube.com/watch?v=fjelp5WR1fU",
        "thumbnail": "https://i.ytimg.com/vi/fjelp5WR1fU/hqdefault.jpg"
      },
      {
        "id": "_PiOh7GQPlc",
        "title": "Terms Related to Probability",
        "url": "https://www.youtube.com/watch?v=_PiOh7GQPlc",
        "thumbnail": "https://i.ytimg.com/vi/_PiOh7GQPlc/hqdefault.jpg"
      },
      {
        "id": "FSwalCHk52A",
        "title": "Introduction to Probability",
        "url": "https://www.youtube.com/watch?v=FSwalCHk52A",
        "thumbnail": "https://i.ytimg.com/vi/FSwalCHk52A/hqdefault.jpg"
      }
    ]
  }
];
