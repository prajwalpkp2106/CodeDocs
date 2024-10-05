import os
from collect_schema import collect_schema
from DOCUMENTATION_WRITER import DOCUMENTATION_WRITER
import google.generativeai as genai  
from dotenv import load_dotenv

load_dotenv()

def process_documentation(module_info):
    
    api_key = os.getenv('API_KEY')
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    
    # Use the raw source code directly from the module_info
    raw_source_code = module_info["raw_source_code"]
    
    # Generate application schema
    print("application schema ")
    application_schema = collect_schema("src/core/schemas")
    print("after application schema ")
    
    # Check if extraPrompt is provided in module_info
    extra_prompt = module_info.get("extra_prompt", "")
    print(extra_prompt)
    # Prepare the prompt for the Gemini model, including the extra prompt if available
    prompt = DOCUMENTATION_WRITER(
        title=module_info["name"],
        path_to_module="",  # No need for a file path anymore
        raw_source_code=raw_source_code,
        application_schema=application_schema,
        list_of_fastapi_routes=[],
        extra_prompt=extra_prompt  # Add extra_prompt to the prompt structure
    )
    
    print("After prompt ")

    try:
        # Send a request to Gemini for processing documentation
        response = model.generate_content(prompt)
        print("response after ")

        doc_content = f"{response.text}\n"
        return doc_content

    except Exception as e:
        print(f"Error generating documentation with Gemini: {str(e)}")
        return None