import Prompt from '@models/prompt';
import {connectToDB} from '@utils/database';

//params 추가
export const GET = async (request, {params}) => {
  try {
    await connectToDB();

    //creator 추가
    const prompts = await Prompt.find({creator: params.id}).populate('creator');

    return new Response(JSON.stringify(prompts), {status: 200});
  } catch (error) {
    return new Response('Failed to fetch prompts created by user', {status: 500});
  }
};
