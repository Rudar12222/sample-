import axios from "axios";

const youtubeApiKey = "AIzaSyBC9beIJ0Q0uXnVkA7ivlhgh05eNZI_Yzs"; // Replace with your YouTube API key

const fetchYouTubeCourse = async (topic) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: `${topic} course`,
          type: "playlist",
          key: youtubeApiKey,
          maxResults: 1,
        },
      }
    );

    if (response.data.items.length === 0) {
      return [];
    }

    const playlistId = response.data.items[0].id.playlistId;
    return fetchYouTubeLessons(playlistId);
  } catch (error) {
    console.error("Error fetching YouTube course:", error);
    return [];
  }
};

const fetchYouTubeLessons = async (playlistId) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId: playlistId,
          maxResults: 50,
          key: youtubeApiKey,
        },
      }
    );

    return response.data.items.map((item) => ({
      title: item.snippet.title,
      link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }));
  } catch (error) {
    console.error("Error fetching YouTube lessons:", error);
    return [];
  }
};

const generateLearningPlan = async (preferences) => {
  const { topic, duration } = preferences;
  const lessons = await fetchYouTubeCourse(topic);

  const dailyGoals = [];
  const lessonsPerDay = Math.ceil(lessons.length / duration);

  for (let day = 1; day <= duration; day++) {
    const dailyGoal = {
      day,
      lessons: lessons.slice((day - 1) * lessonsPerDay, day * lessonsPerDay),
    };

    dailyGoals.push(dailyGoal);
  }

  return { topic, dailyGoals };
};

export { generateLearningPlan };
